import React from "react";
import { Button } from "react-bootstrap";

export const DocButton = (props) => {
  return (
    <Button
      href="https:doc.lasocietenouvelle.org"
      variant="outline-primary"
      target="_blank"
      rel="noreferrer"
      className={props.margin}
      title="Accéder à la documentation"
    >
      Documentation
    </Button>
  );
};
