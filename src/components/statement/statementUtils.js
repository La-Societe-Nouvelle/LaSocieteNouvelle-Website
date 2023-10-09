/* ----- Builder message mails ----- */

export const mailToAdminWriter = (statementData) =>
  "Unité légale : " +
  statementData.siren +
  "\r" +
  "Dénomination : " +
  statementData.denomination +
  "\r" +
  "Année : " +
  statementData.year +
  "\r" +
  "\r" +
  "Valeurs à publier :" +
  "\r" +
  "\r" +
  Object.entries(statementData.socialfootprint).map(
    ([indic, data]) =>
      indic +
      " : " +
      data.value +
      " +/- " +
      data.uncertainty +
      " % " +
      (data.info.length > 0 ? "(" + data.info + ")" : "") +
      "\r"
  ) +
  "\r" +
  "Déclarant :" +
  "\r" +
  "Nom : " +
  statementData.declarant +
  "\r" +
  "Mail : " +
  statementData.email +
  "\r" +
  "\r" +
  "Tarif :" +
  statementData.price +
  " €" +
  "\r";

export const mailToDeclarantWriter = (declarant) =>
  "" +
  declarant +
  "," +
  "\r" +
  "\r" +
  "votre demande de publication a bien été prise en compte. Vous trouverez ci-joint votre déclaration." +
  "\r" +
  " Le délai de traitement est de 7 jours." +
  "\r" +
  "\r" +
  " Pour modifier ou supprimer les données publiées, contactez-nous directement via l'adresse mail admin@lasocietenouvelle.org." +
  "\r" +
  "\r" +
  " Bien à vous," +
  "\r" +
  "\r" +
  "La Société Nouvelle." +
  "\r";

  