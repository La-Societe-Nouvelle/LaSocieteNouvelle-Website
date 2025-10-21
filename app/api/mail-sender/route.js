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
        const { objetMail, messageMail, recipientMail, attachments } = body;

        if (!objetMail || !messageMail) {
            return NextResponse.json(
                { error: 'Objet et message requis' },
                { status: 403 }
            );
        }

        const mailerRes = await mailer({ objetMail, messageMail, recipientMail, attachments });
        return NextResponse.json(mailerRes);
    } catch (error) {
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi' },
            { status: 500 }
        );
    }
}

const mailer = ({ objetMail, messageMail, recipientMail, attachments }) => {
    const mail = {
        from: "La Société Nouvelle <sender@lasocietenouvelle.org>",
        to: recipientMail,
        subject: objetMail,
        text: messageMail,
        attachments: attachments || []
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(mail, (error, info) => error ? reject(error) : resolve(info))
    })
}