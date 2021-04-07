import axios from 'axios'

export const sendContactMail = async (recipientMail,objet,message,coordonnees) => {
    const data = {
        recipientMail,
        objet,
        message,
        coordonnees
    }
    try {
        const res = await axios({
            method: "post",
            url: "../api/mail-sender",
            headers: {
                "Content-Type": "application/json"
            },
            data
        });
        return res;
    } catch (error) {
        return error;
    }
}