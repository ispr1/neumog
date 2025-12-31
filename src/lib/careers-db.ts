import { google } from 'googleapis';
import { jobOpenings as mockJobs } from "@/content/careers";

export interface JobPost {
    date: string;
    id: string; // Used as slug
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    shortDescription: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
    status: 'Active' | 'Closed';
}

const SHEETS_CONFIG = {
    tabs: ['Freshers', '0-2 Years', '2-4 Years', '5+ Years', '8+ Years'],
    range: 'A2:M', // A2 to M to include Date + 11 other columns
};

export const getJobOpenings = async (): Promise<JobPost[]> => {
    // Fallback to mock data if no Careers Sheet ID is configured
    if (!process.env.GOOGLE_CAREERS_SHEET_ID) {
        console.warn('No GOOGLE_CAREERS_SHEET_ID set. Returning mock data.');
        return mockJobs.map(job => ({
            date: new Date().toISOString().split('T')[0], // Mock date
            id: job.slug,
            title: job.title,
            department: job.department,
            location: job.location,
            type: job.type,
            experience: job.experience,
            shortDescription: job.shortDescription,
            description: job.description,
            responsibilities: job.responsibilities,
            requirements: job.requirements,
            benefits: job.benefits,
            status: 'Active'
        }));
    }

    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
        console.warn('Google Sheets credentials missing. Returning mock data.');
        return [];
    }

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    let spreadsheetId = process.env.GOOGLE_CAREERS_SHEET_ID || process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
        return [];
    }

    // Clean ID if URL provided
    if (spreadsheetId.startsWith('http')) {
        const matches = spreadsheetId.match(/\/d\/([a-zA-Z0-9-_]+)/);
        if (matches && matches[1]) spreadsheetId = matches[1];
    }

    // console.log(`[CareersDB] Fetching jobs using Sheet ID: ${spreadsheetId.substring(0, 5)}...`);

    try {
        const allJobs: JobPost[] = [];

        // Fetch data from all tabs in parallel
        const promises = SHEETS_CONFIG.tabs.map(async (tabName) => {
            try {
                const response = await sheets.spreadsheets.values.get({
                    spreadsheetId,
                    range: `'${tabName}'!${SHEETS_CONFIG.range}`,
                });

                const rows = response.data.values;
                if (!rows || rows.length === 0) return [];

                return rows.map((row: any[]) => ({
                    date: row[0] || '',
                    id: row[1] || '',
                    title: row[2] || '',
                    department: row[3] || 'General',
                    location: row[4] || 'Remote',
                    type: row[5] || 'Full-time',
                    experience: row[6] || tabName,
                    shortDescription: row[7] || '',
                    description: row[8] || '',
                    responsibilities: row[9] ? row[9].split('\n').map((s: string) => s.trim()).filter(Boolean) : [],
                    requirements: row[10] ? row[10].split('\n').map((s: string) => s.trim()).filter(Boolean) : [],
                    benefits: row[11] ? row[11].split('\n').map((s: string) => s.trim()).filter(Boolean) : [],
                    status: (row[12] as 'Active' | 'Closed') || 'Closed',
                }));
            } catch (err: any) {
                // Suppress full error object logging to avoid console noise/sourcemap issues
                const msg = err.message || 'Unknown error';
                if (msg.includes('Unable to parse range') || msg.includes('ranges')) {
                    console.warn(`[CareersDB] Tab '${tabName}' not found in Sheet. (Check if you created the tabs: Freshers, 0-2 Years, etc.)`);
                } else {
                    console.warn(`[CareersDB] Failed to fetch tab '${tabName}': ${msg}`);
                }
                return [];
            }
        });

        const results = await Promise.all(promises);

        results.flat().forEach((job: JobPost) => {
            const status = job.status?.toLowerCase().trim();
            // Only show jobs marked explicitly as 'active'
            if (status === 'active' && job.id) {
                allJobs.push(job);
            }
        });

        return allJobs;

    } catch (error) {
        console.error('Error fetching jobs:', error);
        return [];
    }
};

export const getJobBySlug = async (slug: string): Promise<JobPost | undefined> => {
    const jobs = await getJobOpenings();
    return jobs.find(job => job.id === slug);
};
