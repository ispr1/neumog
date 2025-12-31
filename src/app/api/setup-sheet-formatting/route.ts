import { google } from 'googleapis';

const SPREADSHEET_ID = '15vxBOUOHeJHtIYLSRS4_eXtl1__hV_lxtWgvIl4XuVY'; // User's Sheet ID
const TABS = ['Freshers', '0-2 Years', '2-4 Years', '5+ Years', '8+ Years'];

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
        // 1. Get Sheet Properties (to get Sheet IDs needed for batchUpdate)
        const metadata = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
        const sheetInfo = metadata.data.sheets || [];

        const requests: any[] = [];

        // 2. Build requests for each tab
        // We match tabs by title to get their 'gridId' (sheetId)
        sheetInfo.forEach(sheet => {
            const title = sheet.properties?.title || '';
            const sheetId = sheet.properties?.sheetId;

            if (TABS.includes(title) && sheetId !== undefined) {

                // A. Freeze Header Row & Styling
                requests.push({
                    updateSheetProperties: {
                        properties: {
                            sheetId: sheetId,
                            gridProperties: { frozenRowCount: 1 }
                        },
                        fields: 'gridProperties.frozenRowCount'
                    }
                });

                // Format Header Row (Dark Green + White Text)
                requests.push({
                    repeatCell: {
                        range: { sheetId: sheetId, startRowIndex: 0, endRowIndex: 1 },
                        cell: {
                            userEnteredFormat: {
                                backgroundColor: { red: 0.04, green: 0.36, blue: 0.37 }, // Deep Teal/Green
                                textFormat: { foregroundColor: { red: 1, green: 1, blue: 1 }, bold: true, fontSize: 10 },
                                horizontalAlignment: 'CENTER',
                                verticalAlignment: 'MIDDLE'
                            }
                        },
                        fields: 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment,verticalAlignment)'
                    }
                });

                // B. Add Banding (Zebra Stripes)
                requests.push({
                    addBanding: {
                        bandedRange: {
                            range: { sheetId: sheetId, startRowIndex: 1 }, // Apply to all data rows
                            rowProperties: {
                                firstBandColor: { red: 1, green: 1, blue: 1 }, // White
                                secondBandColor: { red: 0.96, green: 0.98, blue: 0.98 } // Very Light Mint/Grey
                            }
                        }
                    }
                });

                // C. Department Dropdown (Chips) - Column D (Index 3)
                requests.push({
                    setDataValidation: {
                        range: { sheetId: sheetId, startRowIndex: 1, startColumnIndex: 3, endColumnIndex: 4 },
                        rule: {
                            condition: {
                                type: 'ONE_OF_LIST',
                                values: [
                                    { userEnteredValue: 'Engineering' },
                                    { userEnteredValue: 'Design' },
                                    { userEnteredValue: 'Product' },
                                    { userEnteredValue: 'Operations' },
                                    { userEnteredValue: 'Marketing' }
                                ]
                            },
                            showCustomUi: true, // Enables Chips
                            strict: false
                        }
                    }
                });

                // D. Status Dropdown (Chips) - Column M (Index 12)
                requests.push({
                    setDataValidation: {
                        range: { sheetId: sheetId, startRowIndex: 1, startColumnIndex: 12, endColumnIndex: 13 },
                        rule: {
                            condition: {
                                type: 'ONE_OF_LIST',
                                values: [
                                    { userEnteredValue: 'Active' },
                                    { userEnteredValue: 'Closed' },
                                    { userEnteredValue: 'On Hold' }
                                ]
                            },
                            showCustomUi: true, // Enables Chips
                            strict: true
                        }
                    }
                });

                // E. Conditional Formatting for Chips colors (Visual Match)

                // STATUS Colors
                const statusColors = [
                    { value: 'Active', bg: { r: 0.85, g: 0.93, b: 0.88 }, fg: { r: 0.05, g: 0.35, b: 0.15 } }, // Green
                    { value: 'Closed', bg: { r: 0.95, g: 0.85, b: 0.85 }, fg: { r: 0.6, g: 0.1, b: 0.1 } },   // Red
                    { value: 'On Hold', bg: { r: 0.9, g: 0.9, b: 0.9 }, fg: { r: 0.2, g: 0.2, b: 0.2 } }    // Grey
                ];

                statusColors.forEach((color, idx) => {
                    requests.push({
                        addConditionalFormatRule: {
                            rule: {
                                ranges: [{ sheetId: sheetId, startRowIndex: 1, startColumnIndex: 12, endColumnIndex: 13 }],
                                booleanRule: {
                                    condition: { type: 'TEXT_EQ', values: [{ userEnteredValue: color.value }] },
                                    format: {
                                        backgroundColor: { red: color.bg.r, green: color.bg.g, blue: color.bg.b },
                                        textFormat: { foregroundColor: { red: color.fg.r, green: color.fg.g, blue: color.fg.b }, bold: true }
                                    }
                                }
                            },
                            index: idx
                        }
                    });
                });

                // DEPARTMENT Colors (Just for visual flair)
                const deptColors = [
                    { value: 'Engineering', bg: { r: 0.85, g: 0.9, b: 0.95 }, fg: { r: 0.1, g: 0.2, b: 0.5 } }, // Blue
                    { value: 'Design', bg: { r: 0.92, g: 0.85, b: 0.92 }, fg: { r: 0.4, g: 0.1, b: 0.4 } },      // Purple
                    { value: 'Product', bg: { r: 0.95, g: 0.9, b: 0.8 }, fg: { r: 0.5, g: 0.3, b: 0.0 } },       // Orange
                ];

                deptColors.forEach((color, idx) => {
                    requests.push({
                        addConditionalFormatRule: {
                            rule: {
                                ranges: [{ sheetId: sheetId, startRowIndex: 1, startColumnIndex: 3, endColumnIndex: 4 }],
                                booleanRule: {
                                    condition: { type: 'TEXT_EQ', values: [{ userEnteredValue: color.value }] },
                                    format: {
                                        backgroundColor: { red: color.bg.r, green: color.bg.g, blue: color.bg.b },
                                        textFormat: { foregroundColor: { red: color.fg.r, green: color.fg.g, blue: color.fg.b }, bold: true }
                                    }
                                }
                            },
                            index: idx + 3 // Offset after status rules
                        }
                    });
                });
            }
        });

        // 3. Execute Batch Update
        if (requests.length > 0) {
            await sheets.spreadsheets.batchUpdate({
                spreadsheetId: SPREADSHEET_ID,
                requestBody: { requests }
            });
        }

        return Response.json({ success: true, message: 'Sheet formatting updated with Dropdowns and Colors!' });

    } catch (error: any) {
        console.error(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
