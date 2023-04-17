import React from "react";
import { Button } from "react-bootstrap";

export const MetrizButton = () => {
  return (
    <Button
      href="https://metriz.lasocietenouvelle.org"
      variant="outline-secondary"
      target="_blank"
      rel="noreferrer"
      title="Accéder à l'application"
    >
      Mesurer mon impact <i className="bi bi-box-arrow-up-right"></i>
    </Button>
  );
};
