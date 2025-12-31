import { NextResponse } from 'next/server';
import { sendNotificationEmail } from '@/lib/mailer';
import { appendToSheet } from '@/lib/sheets';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { formType, ...data } = body;
        const timestamp = new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'medium',
            timeStyle: 'medium',
        });

        console.log(`Received ${formType} submission:`, data);

        if (!formType) {
            return NextResponse.json({ error: 'Missing formType' }, { status: 400 });
        }

        let emailSubject = '';
        let emailHtml = '';

        // Professional Email Template
        const generateHtml = (title: string, fields: Record<string, any>) => `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9fafb; margin: 0; padding: 0; }
                    .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden; border: 1px solid #e5e7eb; }
                    .header { background-color: #111827; color: #ffffff; padding: 24px; text-align: center; }
                    .header h2 { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: 0.5px; }
                    .content { padding: 32px; }
                    .meta { margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #6b7280; }
                    .field-group { margin-bottom: 16px; }
                    .label { display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af; margin-bottom: 4px; font-weight: 600; }
                    .value { font-size: 16px; color: #1f2937; background: #f3f4f6; padding: 12px; border-radius: 6px; }
                    .footer { background-color: #f9fafb; padding: 16px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>${title}</h2>
                    </div>
                    <div class="content">
                        <div class="meta">
                            Received on ${timestamp}
                        </div>
                        ${Object.entries(fields).map(([key, value]) => `
                        <div class="field-group">
                            <span class="label">${key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            <div class="value">${value || '-'}</div>
                        </div>
                        `).join('')}
                    </div>
                    <div class="footer">
                        Automated notification from Neumog Website
                    </div>
                </div>
            </body>
            </html>
        `;

        let shouldSendEmail = false;

        switch (formType) {
            case 'EXPERTS':
                // For Experts, we ONLY write to Google Sheets, NO email notification.

                // Prepare row for Google Sheet: 
                // timestamp, name, email, core skills, availability, portfolioLink, notes, status
                const sheetRow = [
                    timestamp,
                    data.name || '',
                    data.email || '',
                    data.coreSkills || '',
                    data.availability || '',
                    data.portfolioLink || '',
                    data.notes || '',
                    'New' // Status
                ];

                try {
                    await appendToSheet(sheetRow);
                } catch (sheetError) {
                    console.error('Failed to write to Google Sheets:', sheetError);
                }
                break;

            case 'START_PROJECT':
                shouldSendEmail = true;
                emailSubject = 'New Project Inquiry';
                emailHtml = generateHtml('New Project Inquiry', data);
                break;

            case 'CONTACT':
                shouldSendEmail = true;
                emailSubject = 'New Contact Message';
                emailHtml = generateHtml('New Contact Message', data);
                break;

            default:
                return NextResponse.json({ error: 'Invalid formType' }, { status: 400 });
        }

        // Send Email Notification only if required
        if (shouldSendEmail) {
            await sendNotificationEmail(emailSubject, emailHtml);
        }

        return NextResponse.json({ success: true, message: 'Form submitted successfully' });

    } catch (error: unknown) {
        console.error('API Error:', error);

        // Improve error serialization for JSON response
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        const errorStack = error instanceof Error ? error.stack : undefined;

        console.error('Stack trace:', errorStack);

        return NextResponse.json(
            { error: 'Internal Server Error', details: errorMessage },
            { status: 500 }
        );
    }
}
