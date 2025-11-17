import nodemailer from 'nodemailer'
import path from 'path'
import { NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
    host: process.env.FORM_SERVER_SMTP,
    port: process.env.FORM_SERVER_PORT,
    auth: {
        user: process.env.FORM_SENDER_MAIL,
        pass: process.env.FORM_SENDER_PASSWD
    }
})

export async function POST(request) {
    try {
        const body = await request.json();
        const { email } = body;

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
            subject: "Votre plaquette La Société Nouvelle - Campus 2025",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background-color: #191558; padding: 20px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0;">La Société Nouvelle</h1>
                    </div>

                    <div style="padding: 30px 20px;">
                        <h2 style="color: #333;">Bonjour,</h2>

                        <p>Merci pour votre visite sur notre stand !</p>

                        <p>Comme promis, vous trouverez en pièce jointe notre plaquette détaillant le projet de La Société Nouvelle.</p>


                        <div style="text-align: center; margin: 30px 0;">
                            <a href="https://calendly.com/sylvain-humiliere/"
                               style="background-color: #fa595f; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px;">
                               Planifier un rendez-vous
                            </a>
                            <a href="https://lasocietenouvelle.org"
                               style="background-color: #191558; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px;">
                              Site internet
                            </a>
                        </div>

                        <p>N'hésitez pas à nous contacter si vous avez des questions ou souhaitez échanger sur nos solutions.</p>

                        <p style="margin-top: 30px;">
                            Cordialement,<br>
                            <strong>L'équipe La Société Nouvelle</strong>
                        </p>
                    </div>

                    <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #dee2e6;">
                        <p style="margin: 0; color: #6c757d; font-size: 14px;">
                            <strong>La Société Nouvelle</strong><br>
                            contact@lasocietenouvelle.org<br>
                            <a href="https://www.linkedin.com/company/la-societe-nouvelle" style="color: #0d6efd; text-decoration: none;">LinkedIn</a> |
                            <a href="https://lasocietenouvelle.org" style="color: #0d6efd; text-decoration: none;">Site web</a>
                        </p>
                    </div>
                </div>
            `,
            attachments: [
                {
                    filename: 'Plaquette_LaSocieteNouvelle_2025.pdf',
                    path: path.join(process.cwd(), 'public', 'docs', 'Plaquette-congres-2025.pdf'),
                    contentType: 'application/pdf'
                }
            ]
        };

        await transporter.sendMail(mailOptions);

        // Sauvegarder l'email dans Google Sheets
        const timestamp = new Date().toISOString();
        try {
            await fetch('https://script.google.com/macros/s/AKfycbyTpYb5cC_yL3SzY6UxMsb1YaDxR8Qfzr2mFa3ibV4iQIHNSvhPSG0usLV4q4THfVs6/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    timestamp: timestamp
                })
            });
            console.log(`${timestamp} - Email sauvegardé dans Google Sheets: ${email}`);
        } catch (saveError) {
            console.error('Erreur lors de la sauvegarde dans Google Sheets:', saveError);
        }

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