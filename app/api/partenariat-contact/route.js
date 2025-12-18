import nodemailer from 'nodemailer'
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
        const {
            organisme,
            siren,
            adresse,
            codePostal,
            ville,
            siteInternet,
            activitesPrincipales,
            nomContact,
            fonction,
            tel,
            email,
            contributionFinanciere
        } = body;

        // Validation des champs requis
        if (!organisme || !nomContact || !email) {
            return NextResponse.json(
                { error: 'Les champs Organisme, Nom du contact et E-Mail sont requis' },
                { status: 400 }
            );
        }

        // Validation de l'email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { error: 'Email invalide' },
                { status: 400 }
            );
        }

        // Mapping des contributions
        const contributionLabels = {
            'ca_500': 'CA < 500 k€ (500 €)',
            'ca_500_1M': 'CA compris entre 500 k€ et 1 M€ (1 000 €)',
            'ca_1M_10M': 'CA compris entre 1 M€ et 10 M€ (2 500 €)',
            'ca_10M_50M': 'CA compris entre 10 M€ et 50 M€ (5 000 €)',
            'ca_50M': 'CA > 50 M€ (7 500 €)'
        };

        // Email de confirmation envoyé au partenaire potentiel
        const confirmationMailOptions = {
            from: "La Société Nouvelle <no-reply@lasocietenouvelle.org>",
            to: email,
            subject: "Confirmation de votre demande de partenariat 2026",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background-color: #191558; padding: 20px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0;">La Société Nouvelle</h1>
                    </div>

                    <div style="padding: 30px 20px;">
                        <h2 style="color: #333;">Bonjour ${nomContact},</h2>

                        <p>Merci pour votre intérêt pour devenir partenaire de La Société Nouvelle pour l'année 2026 !</p>

                        <p>Nous avons bien reçu votre demande et nous vous recontacterons prochainement pour échanger sur les modalités de partenariat.</p>

                        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="color: #191558; margin-top: 0;">Récapitulatif de votre demande :</h3>

                            <p style="margin: 10px 0; font-weight: 600; color: #191558;">Informations sur la structure :</p>
                            <p style="margin: 5px 0;"><strong>Organisme :</strong> ${organisme}</p>
                            ${siren ? `<p style="margin: 5px 0;"><strong>Numéro SIREN :</strong> ${siren}</p>` : ''}
                            ${adresse ? `<p style="margin: 5px 0;"><strong>Adresse :</strong> ${adresse}</p>` : ''}
                            ${codePostal || ville ? `<p style="margin: 5px 0;"><strong>Localisation :</strong> ${codePostal} ${ville}</p>` : ''}
                            ${siteInternet ? `<p style="margin: 5px 0;"><strong>Site internet :</strong> <a href="${siteInternet}">${siteInternet}</a></p>` : ''}
                            ${activitesPrincipales ? `<p style="margin: 5px 0;"><strong>Activités principales :</strong> ${activitesPrincipales}</p>` : ''}

                            <p style="margin: 10px 0; margin-top: 20px; font-weight: 600; color: #191558;">Informations de contact :</p>
                            <p style="margin: 5px 0;"><strong>Nom du contact :</strong> ${nomContact}</p>
                            ${fonction ? `<p style="margin: 5px 0;"><strong>Fonction :</strong> ${fonction}</p>` : ''}
                            ${tel ? `<p style="margin: 5px 0;"><strong>Téléphone :</strong> ${tel}</p>` : ''}
                            <p style="margin: 5px 0;"><strong>Email :</strong> ${email}</p>

                            ${contributionFinanciere ? `
                            <p style="margin: 10px 0; margin-top: 20px; font-weight: 600; color: #191558;">Contribution financière :</p>
                            <p style="margin: 5px 0; color: #fa595f; font-weight: 600;">${contributionLabels[contributionFinanciere] || contributionFinanciere}</p>
                            ` : ''}
                        </div>


                        <p>En attendant, n'hésitez pas à nous contacter si vous avez des questions.</p>

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
            `
        };

        // Email de notification interne
        const notificationMailOptions = {
            from: "La Société Nouvelle <no-reply@lasocietenouvelle.org>",
            to: "laura.roost@lasocietenouvelle.org",
            subject: `Nouvelle demande de partenariat 2026 - ${organisme}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background-color: #191558; padding: 20px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0;">Nouvelle demande de partenariat</h1>
                    </div>

                    <div style="padding: 30px 20px;">
                        <h2 style="color: #333;">Nouvelle demande reçue</h2>

                        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <p style="margin: 10px 0; font-weight: 600; color: #191558;">Informations sur la structure :</p>
                            <p style="margin: 5px 0;"><strong>Organisme :</strong> ${organisme}</p>
                            ${siren ? `<p style="margin: 5px 0;"><strong>Numéro SIREN :</strong> ${siren}</p>` : ''}
                            ${adresse ? `<p style="margin: 5px 0;"><strong>Adresse :</strong> ${adresse}</p>` : ''}
                            ${codePostal || ville ? `<p style="margin: 5px 0;"><strong>Localisation :</strong> ${codePostal} ${ville}</p>` : ''}
                            ${siteInternet ? `<p style="margin: 5px 0;"><strong>Site internet :</strong> <a href="${siteInternet}">${siteInternet}</a></p>` : ''}
                            ${activitesPrincipales ? `<p style="margin: 5px 0;"><strong>Activités principales :</strong> ${activitesPrincipales}</p>` : ''}

                            <p style="margin: 10px 0; margin-top: 20px; font-weight: 600; color: #191558;">Informations de contact :</p>
                            <p style="margin: 5px 0;"><strong>Nom du contact :</strong> ${nomContact}</p>
                            ${fonction ? `<p style="margin: 5px 0;"><strong>Fonction :</strong> ${fonction}</p>` : ''}
                            ${tel ? `<p style="margin: 5px 0;"><strong>Téléphone :</strong> ${tel}</p>` : ''}
                            <p style="margin: 5px 0;"><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>

                            ${contributionFinanciere ? `
                            <p style="margin: 10px 0; margin-top: 20px; font-weight: 600; color: #191558;">Contribution financière :</p>
                            <p style="margin: 5px 0; color: #fa595f; font-weight: 600;">${contributionLabels[contributionFinanciere] || contributionFinanciere}</p>
                            ` : ''}
                        </div>

                    </div>
                </div>
            `
        };

        // Envoyer les deux emails
        await transporter.sendMail(confirmationMailOptions);
        await transporter.sendMail(notificationMailOptions);

  
        return NextResponse.json({
            success: true,
            message: 'Demande envoyée avec succès'
        });

    } catch (error) {
        console.error('Erreur envoi email:', error);
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi de la demande' },
            { status: 500 }
        );
    }
}
