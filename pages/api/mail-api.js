export const sendContactMail = async (recipientMail,objet,message,coordonnees) => {
    const data = {
        recipientMail,
        objet,
        message,
        coordonnees
    }
    try {

        const res = await fetch('/api/mail-sender', {
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          })

        return res;
    } catch (error) {
        return error;
    }
}
