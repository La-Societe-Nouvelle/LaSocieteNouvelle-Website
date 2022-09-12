import { Alert } from "react-bootstrap";

const ErrorAlert = (props) => {
  let message;

  switch (props.code) {
    case 404:
      message = "Aucun résultat";
      break;
    case 500:
      message =
        "Erreur lors de la récupération des informations. Veuillez réessayer plus tard.";

    default:
      break;
  }
  return <Alert variant="warning">{message}</Alert>;
};

export default ErrorAlert;
