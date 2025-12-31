import { google } from 'googleapis';

const SPREADSHEET_ID = '15vxBOUOHeJHtIYLSRS4_eXtl1__hV_lxtWgvIl4XuVY';
const TABS = ['Freshers', '0-2 Years', '2-4 Years', '5+ Years', '8+ Years'];

// Correct Headers including 'shortDescription' at Index 7 (Column H)
const HEADERS = [
    'date',             // A
    'id',               // B
    'title',            // C
    'department',       // D
    'location',         // E
    'type',             // F
    'experience',       // G
    'shortDescription', // H
    'description',      // I
    'responsibilities', // J
    'requirements',     // K
    'benefits',         // L
    'status'            // M
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
        // Prepare requests to overwrite just the Header Row (A1:M1) for all tabs
        const requests = TABS.map(tabName =>
            sheets.spreadsheets.values.update({
                spreadsheetId: SPREADSHEET_ID,
                range: `'${tabName}'!A1:M1`,
                valueInputOption: 'RAW',
                requestBody: { values: [HEADERS] }
            })
        );

        await Promise.all(requests);

        return Response.json({ success: true, message: 'Headers fixed! shortDescription should now be visible in Column H.' });

    } catch (error: any) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
