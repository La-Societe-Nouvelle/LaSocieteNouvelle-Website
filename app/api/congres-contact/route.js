import nodemailer from 'nodemailer'
import path from 'path'
import { NextResponse, after } from 'next/server'

const transporter = nodemailer.createTransport({
    host: process.env.FORM_SERVER_SMTP,
    port: process.env.FORM_SERVER_PORT,
    auth: {
        user: process.env.FORM_SENDER_MAIL,
        pass: process.env.FORM_SENDER_PASSWD
    },
    pool: true,
    maxConnections: 1,
    maxMessages: 100
})

// Sauvegarde de l'email dans Google Sheets (non bloquant, exécuté après la réponse)
async function saveToSheet(email, newsletter) {
    const timestamp = new Date().toISOString();
    try {
        const sheetRes = await fetch('https://script.google.com/macros/s/AKfycbyTpYb5cC_yL3SzY6UxMsb1YaDxR8Qfzr2mFa3ibV4iQIHNSvhPSG0usLV4q4THfVs6/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                timestamp,
                newsletter: newsletter === true
            })
        });
        const sheetBody = await sheetRes.text();
        if (!sheetRes.ok) {
            console.error(`Google Sheets a répondu ${sheetRes.status} pour ${email}:`, sheetBody.slice(0, 500));
        } else {
            console.log(`${timestamp} - Email sauvegardé dans Google Sheets: ${email} (réponse: ${sheetBody.slice(0, 200)})`);
        }
    } catch (saveError) {
        console.error('Erreur lors de la sauvegarde dans Google Sheets:', saveError);
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { email, newsletter } = body;

        if (!email) {
            return NextResponse.json(
                { error: 'Email requis' },
                { status: 400 }
            );
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { error: 'Email invalide' },
                { status: 400 }
            );
        }

        const mailOptions = {
            from: "La Société Nouvelle <no-reply@lasocietenouvelle.org>",
            to: email,
            subject: "Merci de votre visite sur notre stand !",
            html: `
            <!DOCTYPE html>
            <html lang="fr" xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="x-apple-disable-message-reformatting" />
                <title>Votre plaquette La Société Nouvelle</title>
            </head>
            <body style="margin:0; padding:0; background-color:#f0f0f8;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f0f8;">
                    <tr>
                        <td align="center" style="padding:32px 16px;">
                            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:100%; background-color:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #e4e4f2;">

                                <!-- En-tête : logo blanc sur fond bleu primary -->
                                <tr>
                                    <td style="background-color:#191558; padding:34px 32px 30px; text-align:center;">
                                        <img src="cid:lsnlogo" width="210" alt="La Société Nouvelle"
                                             style="display:inline-block; width:210px; max-width:62%; height:auto; border:0;" />
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:3px; background-color:#F76C6C; line-height:3px; font-size:0;">&nbsp;</td>
                                </tr>

                                <!-- Corps -->
                                <tr>
                                    <td style="padding:36px 32px 8px; font-family:Arial, Helvetica, sans-serif; color:#333333;">
                                        <h1 style="margin:0 0 20px; font-size:20px; color:#191558;">Bonjour,</h1>
                                        <p style="margin:0 0 16px; font-size:15px; line-height:1.6;">
                                            Merci pour votre visite sur notre stand au Congrès de l'Ordre des experts-comptables&#8239;!
                                        </p>
                                        <p style="margin:0 0 24px; font-size:15px; line-height:1.6;">
                                            Comme promis, vous trouverez notre plaquette
                                            <strong>en pièce jointe de cet email</strong> (format PDF).
                                            Elle détaille le projet de La Société Nouvelle.
                                        </p>

                                        <!-- Boutons -->
                                        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 28px;">
                                            <tr>
                                                <td style="border-radius:10px; background-color:#F76C6C;">
                                                    <a href="https://calendly.com/sylvain-humiliere/"
                                                       style="display:inline-block; padding:13px 28px; font-family:Arial, Helvetica, sans-serif; font-size:15px; font-weight:700; color:#ffffff; text-decoration:none; border-radius:10px;">
                                                        Planifier un rendez-vous
                                                    </a>
                                                </td>
                                                <td style="width:12px; font-size:0; line-height:0;">&nbsp;</td>
                                                <td style="border-radius:10px; border:2px solid #191558;">
                                                    <a href="https://lasocietenouvelle.org"
                                                       style="display:inline-block; padding:11px 26px; font-family:Arial, Helvetica, sans-serif; font-size:15px; font-weight:700; color:#191558; text-decoration:none; border-radius:10px;">
                                                        Découvrir le projet
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>

                                        <p style="margin:0 0 8px; font-size:15px; line-height:1.6;">
                                            N'hésitez pas à nous contacter si vous avez des questions ou souhaitez
                                            échanger sur nos solutions.
                                        </p>
                                        <p style="margin:24px 0 4px; font-size:15px; line-height:1.6;">
                                            Cordialement,<br />
                                            <strong style="color:#191558;">L'équipe La Société Nouvelle</strong>
                                        </p>
                                    </td>
                                </tr>

                                <!-- Pied de page -->
                                <tr>
                                    <td style="padding:24px 32px 28px;">
                                        <div style="border-top:1px solid #e4e4f2; padding-top:20px; text-align:center; font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:1.7; color:#8a8a99;">
                                            <strong style="color:#191558;">La Société Nouvelle</strong><br />
                                            <a href="mailto:contact@lasocietenouvelle.org" style="color:#8a8a99; text-decoration:none;">contact@lasocietenouvelle.org</a><br />
                                            <a href="https://www.linkedin.com/company/la-societe-nouvelle" style="color:#F76C6C; text-decoration:none; font-weight:600;">LinkedIn</a>
                                            &nbsp;&middot;&nbsp;
                                            <a href="https://lasocietenouvelle.org" style="color:#F76C6C; text-decoration:none; font-weight:600;">lasocietenouvelle.org</a>
                                        </div>
                                    </td>
                                </tr>

                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
            `,
            attachments: [
                {
                    filename: 'logo-la-societe-nouvelle.png',
                    path: path.join(process.cwd(), 'public', 'images', 'logo-lsn-email-white.png'),
                    cid: 'lsnlogo'
                },
                {
                    filename: 'Plaquette_LaSocieteNouvelle_2026.pdf',
                    path: path.join(process.cwd(), 'public', 'docs', 'Plaquette-congres-2026.pdf'),
                    contentType: 'application/pdf'
                }
            ]
        };

        await transporter.sendMail(mailOptions);

        // Étape non critique : lancée après l'envoi de la réponse
        // (l'utilisateur n'attend pas Google Sheets)
        after(() => saveToSheet(email, newsletter));

        return NextResponse.json({
            success: true,
            message: 'Email envoyé avec succès'
        });

    } catch (error) {
        console.error('Erreur envoi email:', error);
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi de l\'email' },
            { status: 500 }
        );
    }
}