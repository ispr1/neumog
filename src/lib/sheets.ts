import { google } from 'googleapis';

export const appendToSheet = async (values: string[]) => {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
        throw new Error('Google Sheets credentials are missing in environment variables.');
    }

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // clean the sheet ID if the user pasted the full URL
    let spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (spreadsheetId.startsWith('http')) {
        const matches = spreadsheetId.match(/\/d\/([a-zA-Z0-9-_]+)/);
        if (matches && matches[1]) {
            spreadsheetId = matches[1];
        }
    }

    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A:A', // Appends to the first sheet, assuming columns match
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [values],
            },
        });
        console.log('Sheet updated:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('Error appending to sheet:', error.message);
        if (error.response) {
            console.error('API Error Response:', JSON.stringify(error.response.data, null, 2));
        }
        throw error;
    }
};
