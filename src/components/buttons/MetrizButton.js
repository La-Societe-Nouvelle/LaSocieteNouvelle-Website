import React from "react";
import { Button } from "react-bootstrap";

export const MetrizButton = () => {
  return (
    <Button
      href="https://partners.metriz.lasocietenouvelle.org"
      variant="secondary"
      target="_blank"
      rel="noreferrer"
      title="Accéder à l'application"
      className="rounded-0"
    >
      Accéder à METRIZ <i className="bi bi-box-arrow-up-right ms-1"/>
    </Button>
  );
};
