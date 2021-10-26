export const sendContactMail = async (recipientMail,objet,message,coordonnees) => 
{
  const objetMail = objet;
  const messageMail = message
          + " \r\r ----------------- \r ## Coordonnées ## \r ----------------- \r "
          + coordonnees;

  const contentMail = { recipientMail, objetMail, messageMail }

  const req = {
    body: JSON.stringify(contentMail),
    headers: {'Content-Type': 'application/json'},
    method: 'POST'
  }

  try 
  {
      const res = await fetch('/api/mail-sender', req);
      console.log(res);
      return res;
  } 
  catch (error) {
      return error;
  }
}

export const sendAssessment = async (siren,data,message,coordonnees,participation) => {

    const recipientMail= "sylvain.humiliere@la-societe-nouvelle.fr";
    const objetMail= "Déclaration en ligne";
    const messageMail = "Unité légale : "+siren
            + " \r\r ----------------------- \r ## Valeurs déclarées ## \r ----------------------- \r "
            + Object.entries(data).map(([indic],_) => { return("\r"+indic+" : "+data[indic].value+" (+/- "+data[indic].uncertainty+" %) ") })
            + " \r\r ------------- \r ## Message ## \r ------------- \r "
            + message
            + " \r\r ------------------- \r ## Participation ## \r ------------------- \r "
            + participation
            + " \r\r ----------------- \r ## Coordonnées ## \r ----------------- \r "
            + coordonnees;

    const contentMail = { recipientMail, objetMail, messageMail }
    
    try {
        const res = await fetch('/api/mail-sender', {
            body: JSON.stringify(contentMail),
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

export const sendStatementToAdmin = async (message,statementFile) => 
{
  const recipientMail= "admin@lasocietenouvelle.org";
  const objetMail= "Demande de publication (via formulaire)";
  const messageMail = message;
  const attachments = [{
    filename: 'bon_pour_publication.pdf',
    content: statementFile,
    encoding: 'base64'
  }];

  const contentMail = { recipientMail, objetMail, messageMail, attachments }

  const request = {
    body: JSON.stringify(contentMail),
    headers: {'Content-Type': 'application/json'},
    method: 'POST'
  }
  
  try 
  {
      const res = await fetch('/api/mail-sender', request);
      console.log(res);
      return res;
  } 
  catch (error) {
    return error;
  }
}

export const sendSimplifiedAssessment = async (siren,data,message,coordonnees,participation) => {

    const recipientMail= "sylvain.humiliere@la-societe-nouvelle.fr";
    const objetMail= "Déclaration en ligne (simplfiiée)";
    const messageMail = "Unité légale : "+siren
            + " \r\r ----------------------- \r ## Valeurs déclarées ## \r ----------------------- \r "
            + Object.entries(data).map(([indic],_) => { return("\r"+indic+" : "+data[indic].value+" (+/- "+data[indic].uncertainty+" %) ") })
            + " \r\r ------------- \r ## Message ## \r ------------- \r "
            + message
            + " \r\r ------------------- \r ## Participation ## \r ------------------- \r "
            + participation
            + " \r\r ----------------- \r ## Coordonnées ## \r ----------------- \r "
            + coordonnees;

    const contentMail = { recipientMail, objetMail, messageMail }
    
    try {
        const res = await fetch('/api/mail-sender', {
            body: JSON.stringify(contentMail),
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
