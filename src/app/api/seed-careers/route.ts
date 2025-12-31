import { google } from 'googleapis';
import { jobOpenings } from '@/content/careers';

// Configuration
const SPREADSHEET_ID = '15vxBOUOHeJHtIYLSRS4_eXtl1__hV_lxtWgvIl4XuVY';
const TABS = {
    FRESHERS: 'Freshers',     // Code A
    JUNIOR: '0-2 Years',    // Code B
    MID: '2-4 Years',    // Code C
    SENIOR: '5+ Years',     // Code D
    LEAD: '8+ Years'      // Code E
};

const CATEGORY_CODES: Record<string, string> = {
    [TABS.FRESHERS]: 'A',
    [TABS.JUNIOR]: 'B',
    [TABS.MID]: 'C',
    [TABS.SENIOR]: 'D',
    [TABS.LEAD]: 'E'
};

const HEADERS = [
    'date',
    'id',
    'title',
    'department',
    'location',
    'type',
    'experience',
    'shortDescription',
    'description',
    'responsibilities',
    'requirements',
    'benefits',
    'status'
];

export async function GET() {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
        return Response.json({ error: 'Missing credentials' }, { status: 500 });
    }

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    try {
        // 1. Write Headers to all tabs
        const headerRequests = Object.values(TABS).map(tabName =>
            sheets.spreadsheets.values.update({
                spreadsheetId: SPREADSHEET_ID,
                range: `'${tabName}'!A1:M1`,
                valueInputOption: 'RAW',
                requestBody: { values: [HEADERS] }
            })
        );
        await Promise.all(headerRequests);

        // 2. Prepare Data to Insert
        // We will insert 'Senior Full Stack' into '5+ Years' and 'Product Designer' into '2-4 Years' as examples.

        const seniorRole = jobOpenings[0]; // Senior Engineer
        const midRole = jobOpenings[1];    // Product Designer

        // Helper to format rows
        const formatRow = (job: any, code: string, index: number) => {
            const date = new Date().toISOString().split('T')[0];
            const suffix = index.toString().padStart(2, '0');
            const id = `N${code}C${suffix}`; // e.g. NDC01

            return [
                date,
                id,
                job.title,
                job.department,
                job.location,
                job.type,
                job.experience,
                job.shortDescription,
                job.description,
                job.responsibilities.join('\n'), // Alt+Enter format
                job.requirements.join('\n'),
                job.benefits.join('\n'),
                'Active'
            ];
        };

        const inserts = [];

        // Insert Senior Role (Category D)
        inserts.push(sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `'${TABS.SENIOR}'!A2`,
            valueInputOption: 'USER_ENTERED',
            requestBody: { values: [formatRow(seniorRole, 'D', 1)] }
        }));

        // Insert Designer Role (Category C)
        inserts.push(sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `'${TABS.MID}'!A2`,
            valueInputOption: 'USER_ENTERED',
            requestBody: { values: [formatRow(midRole, 'C', 1)] }
        }));

        await Promise.all(inserts);

        return Response.json({ success: true, message: 'Sheet populated successfully!' });

    } catch (error: any) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
