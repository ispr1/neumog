import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

// --- Configuration ---
const SPREADSHEET_ID = process.env.GOOGLE_CAREERS_SHEET_ID;
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

// Tabs to aggregate
const SOURCE_TABS = ["Freshers", "Experienced", "Internships", "Executive", "Contract"];

export async function GET(req: NextRequest) {
    try {
        if (!SPREADSHEET_ID || !SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
            return NextResponse.json({ error: "Missing Google Sheet credentials" }, { status: 500 });
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: SERVICE_ACCOUNT_EMAIL,
                private_key: PRIVATE_KEY.replace(/\\n/g, "\n"),
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        // 1. Get current sheet properties to check for existing 'Dashboard' or 'Master'
        const meta = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
        const existingTitles = meta.data.sheets?.map(s => s.properties?.title) || [];

        const requests: any[] = [];

        // --- Step A: Create "_MasterData" (Hidden Aggregation Tab) ---
        // This allows us to run analytics across ALL tabs easily.
        if (!existingTitles.includes("_MasterData")) {
            requests.push({
                addSheet: {
                    properties: {
                        title: "_MasterData",
                        gridProperties: { rowCount: 1000, columnCount: 20 },
                        // tabColor: { red: 0.8, green: 0.8, blue: 0.8 } // Grey to indicate utility
                    }
                }
            });
        }

        // --- Step B: Create "Executive Dashboard" (Visual Analytics) ---
        if (!existingTitles.includes("Executive Dashboard")) {
            requests.push({
                addSheet: {
                    properties: {
                        title: "Executive Dashboard",
                        gridProperties: { rowCount: 100, columnCount: 15 },
                        index: 0, // Put it first!
                        tabColor: { red: 0.2, green: 0.2, blue: 0.2 } // Dark/Premium tab color
                    }
                }
            });
        }

        // Execute creation requests first if needed
        if (requests.length > 0) {
            await sheets.spreadsheets.batchUpdate({
                spreadsheetId: SPREADSHEET_ID,
                requestBody: { requests }
            });
            // Clear array for next steps
            requests.length = 0;
        }

        // --- Step C: Populate Formulas & Formatting ---

        // 1. Setup _MasterData Formula
        // We construct a massive Array Formula: ={'Freshers'!A2:L; 'Experienced'!A2:L; ...}
        // We assume columns A:L are consistent across all tabs.
        const ranges = SOURCE_TABS.map(tab => `'${tab}'!A2:L`).join("; ");
        const masterFormula = `={${ranges}}`;

        // 2. Dashboard Layout
        // We will create a "Card" layout using cell formatting.

        const dashboardUpdates = [
            // Title
            { range: "'Executive Dashboard'!B2", values: [["NEUMOG RECRUITMENT ANALYTICS"]] },
            { range: "'Executive Dashboard'!B3", values: [["Real-time overview of recruitment pipeline"]] },

            // KPI 1: Total Roles
            { range: "'Executive Dashboard'!B6", values: [["TOTAL OPEN ROLES"]] },
            { range: "'Executive Dashboard'!B7", values: [[`=COUNTA('_MasterData'!A:A)`]] },

            // KPI 2: Active Roles
            { range: "'Executive Dashboard'!D6", values: [["ACTIVE LISTINGS"]] },
            { range: "'Executive Dashboard'!D7", values: [[`=COUNTIF('_MasterData'!B:B, "Active")`]] },

            // KPI 3: On Hold
            { range: "'Executive Dashboard'!F6", values: [["ON HOLD"]] },
            { range: "'Executive Dashboard'!F7", values: [[`=COUNTIF('_MasterData'!B:B, "On Hold")`]] },

            // Analysis Table Header
            { range: "'Executive Dashboard'!B11", values: [["DEPARTMENT BREAKDOWN"]] },
            // Query to auto-generate the table
            { range: "'Executive Dashboard'!B13", values: [[`=QUERY('_MasterData'!A:D, "SELECT C, COUNT(A) WHERE C IS NOT NULL GROUP BY C ORDER BY COUNT(A) DESC LABEL C 'Department', COUNT(A) 'Count'", 1)`]] },

            // Analysis Table 2: Status
            { range: "'Executive Dashboard'!F11", values: [["STATUS OVERVIEW"]] },
            { range: "'Executive Dashboard'!F13", values: [[`=QUERY('_MasterData'!A:D, "SELECT B, COUNT(A) WHERE B IS NOT NULL GROUP BY B LABEL B 'Status', COUNT(A) 'Count'", 1)`]] }
        ];

        // Push Value Updates
        await sheets.spreadsheets.values.batchUpdate({
            spreadsheetId: SPREADSHEET_ID,
            requestBody: {
                valueInputOption: "USER_ENTERED",
                data: [
                    { range: "'_MasterData'!A1", values: [[masterFormula]] }, // The big formula
                    ...dashboardUpdates
                ]
            }
        });

        // --- Step D: Styling (The "Premium" Part) ---
        const stylingRequests = [
            // 1. Hide _MasterData gridlines (cleanup) and maybe hide the sheet? (API can't fully 'hide' easily without specific request, but we can protect it)

            // 2. Style Dashboard Title
            {
                repeatCell: {
                    range: { sheetId: await getSheetId(sheets, SPREADSHEET_ID, "Executive Dashboard"), startRowIndex: 1, endRowIndex: 2, startColumnIndex: 1, endColumnIndex: 8 },
                    cell: {
                        userEnteredFormat: {
                            textFormat: { fontSize: 24, bold: true, fontFamily: "Montserrat", foregroundColor: { red: 0.2, green: 0.2, blue: 0.2 } },
                            backgroundColor: { red: 1, green: 1, blue: 1 } // Clean white
                        }
                    },
                    fields: "userEnteredFormat(textFormat,backgroundColor)"
                }
            },
            // 3. Style KPI Cards (B6:B8, D6:D8, F6:F8)
            {
                repeatCell: {
                    range: { sheetId: await getSheetId(sheets, SPREADSHEET_ID, "Executive Dashboard"), startRowIndex: 5, endRowIndex: 6, startColumnIndex: 1, endColumnIndex: 7 },
                    cell: {
                        userEnteredFormat: {
                            textFormat: { fontSize: 10, bold: true, foregroundColor: { red: 0.5, green: 0.5, blue: 0.5 } }, // Label color
                            horizontalAlignment: "CENTER"
                        }
                    },
                    fields: "userEnteredFormat(textFormat,horizontalAlignment)"
                }
            },
            {
                repeatCell: {
                    range: { sheetId: await getSheetId(sheets, SPREADSHEET_ID, "Executive Dashboard"), startRowIndex: 6, endRowIndex: 8, startColumnIndex: 1, endColumnIndex: 7 }, // The Numbers
                    cell: {
                        userEnteredFormat: {
                            textFormat: { fontSize: 36, bold: true, fontFamily: "Roboto" },
                            horizontalAlignment: "CENTER",
                            backgroundColor: { red: 0.96, green: 0.96, blue: 0.96 } // Light grey bg for cards
                        }
                    },
                    fields: "userEnteredFormat(textFormat,horizontalAlignment,backgroundColor)"
                }
            },
            // 4. Remove Gridlines from Dashboard (Visual Polish)
            {
                updateSheetProperties: {
                    properties: {
                        sheetId: await getSheetId(sheets, SPREADSHEET_ID, "Executive Dashboard"),
                        gridProperties: { hideGridlines: true }
                    },
                    fields: "gridProperties.hideGridlines"
                }
            },
            // 5. Borders for tables
            // (Skipping complex border logic for brevity, keeping it clean with colors)
        ];

        await sheets.spreadsheets.batchUpdate({
            spreadsheetId: SPREADSHEET_ID,
            requestBody: { requests: stylingRequests }
        });


        return NextResponse.json({ success: true, message: "Sheet enhanced with Dashboard and Analytics layers." });

    } catch (error: any) {
        console.error("Sheet Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// Helper to get Sheet ID by Title
async function getSheetId(sheets: any, spreadsheetId: string, title: string) {
    const meta = await sheets.spreadsheets.get({ spreadsheetId });
    const sheet = meta.data.sheets?.find((s: any) => s.properties?.title === title);
    return sheet?.properties?.sheetId;
}
