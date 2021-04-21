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

export const sendDeclarationMail = async (objet,siren,values,note,participation,coordonnees) => {
    const recipientMail= "sylvain.humiliere@la-societe-nouvelle.fr";
    const message = "Déclaration simplifiée pour unité légale : "+siren
            + " \r\r ## Valeurs déclarées ## \r\r "
            + Object.entries(values).map(([indicateur],_) => {
                return("\r"+indicateur+" : "+values[indicateur].valeur+" (+/- "+values[indicateur].incertitude+" %) ")
            })
            + " \r\r ## Note ## \r\r "
            + note
            + " \r\r ## Participation ## \r\r "
            + participation;
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
