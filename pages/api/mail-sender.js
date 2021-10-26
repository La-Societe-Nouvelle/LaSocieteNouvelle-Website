import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: "ssl0.ovh.net",
    port: "465",
    auth: {
        user: process.env.FORM_SENDER_MAIL,
        pass: process.env.FORM_SENDER_PASSWD
    }
})

export default async (req,res) => {
    const {recipientMail, objetMail, messageMail} = req.body;

    if (objetMail==="" || messageMail==="") {
        res.status(403).send("");
        return
    }

    const mailerRes = await mailer({objetMail,text:messageMail,recipientMail});
    res.send(mailerRes);

}

const mailer = ({objetMail,text,recipientMail}) => {
    
    const mail = {
        from: " Formulaire de contact - Website <"+process.env.FORM_SENDER_MAIL+">",
        to: recipientMail,
        subject: objetMail,
        text
    }

    return new Promise((resolve,reject) => {
        transporter.sendMail(mail, (error,info) =>
            error ? reject(error) : resolve(info))
    })
    
}
