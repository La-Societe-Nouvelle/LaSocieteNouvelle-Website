import { Alert } from "react-bootstrap";

const ErrorAlert = (props) => {
  let message;
 
  switch (props.code) {
    case 404:
      message = "Aucun résultat";
      break;
    case 500:
      message = "Erreur lors de la récupération des informations. Veuillez réessayer plus tard.";
      break;
    case 504:
      message = "Recherche imprécise. Veuillez affiner votre recherche.";
      break;
    default:
      message = "Une erreur est survenue"
      break;
  }
  return <Alert variant="info"><p className="mb-0">{message}</p></Alert>;
};

export default ErrorAlert;
