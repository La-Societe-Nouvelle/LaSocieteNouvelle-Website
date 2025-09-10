import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

const transporter = nodemailer.createTransport({
    host: process.env.FORM_SERVER_SMTP,
    port: process.env.FORM_SERVER_PORT,
    auth: {
        user: process.env.FORM_SENDER_MAIL,
        pass: process.env.FORM_SENDER_PASSWD
    }
})

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email requis' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'Email invalide' });
    }

    try {
        const mailOptions = {
            from: "La Société Nouvelle <sender@lasocietenouvelle.org>",
            to: email,
            subject: "Votre plaquette La Société Nouvelle - Congrès de l'Ordre des Experts-Comptables 2025",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background-color: #191558; padding: 20px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0;">La Société Nouvelle</h1>
                    </div>
                    
                    <div style="padding: 30px 20px;">
                        <h2 style="color: #333;">Bonjour,</h2>
                        
                        <p>Merci pour votre visite sur notre stand au Congrès de l'Ordre des Experts Comptables 2025 !</p>
                        
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
                    filename: 'Plaquette_LaSocieteNouvelle_CEC2025.pdf',
                    path: './public/docs/Rapport-Livrable-demo.pdf',
                    contentType: 'application/pdf'
                }
            ]
        };

        await transporter.sendMail(mailOptions);

        // Sauvegarder l'email dans un fichier texte
        const emailLogPath = path.join(process.cwd(), 'congres-emails.txt');
        const timestamp = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
        const logEntry = `${timestamp} - ${email}\n`;
        
        try {
            fs.appendFileSync(emailLogPath, logEntry, 'utf8');
        } catch (writeError) {
            console.error('Erreur lors de la sauvegarde de l\'email:', writeError);
        }
        
        res.status(200).json({ 
            success: true, 
            message: 'Email envoyé avec succès' 
        });

    } catch (error) {
        console.error('Erreur envoi email:', error);
        res.status(500).json({ 
            error: 'Erreur lors de l\'envoi de l\'email' 
        });
    }
}