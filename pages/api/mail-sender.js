import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: "smtp.sfr.fr",
    port: "465",
    auth: {
        user: process.env.FORM_SENDER_MAIL,
        pass: process.env.FORM_SENDER_PASSWD
    }
})

export default async (req,res) => {
    const {objet,message,coordonnees,recipientMail} = req.body;

    if (objet==="" || message==="" ||coordonnees==="") {
        res.status(403).send("");
        return
    }

    const content = message + " \r\r ## Coordonnées ## \r\r" + coordonnees;
    const mailerRes = await mailer({objet,text:content,recipientMail});
    res.send(mailerRes);

}

const mailer = ({objet,text,recipientMail}) => {
    const mail = {
        from: " Formulaire de contact - Website <"+process.env.FORM_SENDER_MAIL+">",
        to: recipientMail,
        subject: objet,
        text
    }

    return new Promise((resolve,reject) => {
        transporter.sendMail(mail, (error,info) =>
            error ? reject(error) : resolve(info))
    })
    
}