import React from "react";
import { Button, Container } from "react-bootstrap";

const DownloadFile = (props) => {
  return (
    <section className="">
      <Container>
          <h3 className="mb-4">Téléchargement des données</h3>
          <div className="d-flex justify-content-between align-items-center small">
            <a
              href={`/download/2020/${props.file}.xlsx`}
              target="_blank"
              className="text-decoration-underline"
            >
              <i className="bi bi-filetype-xlsx"></i> {props.title} - Empreintes
              des branches d'activité - Année {props.year}.xlsx
            </a>

            <Button
              variant="secondary"
              size="sm"
              href={`/download/2020/${props.file}.xlsx`}
              target="_blank"
            >
              <i className="bi bi-filetype-xlsx"></i> Télécharger
            </Button>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2 small ">
            <a
              href={`/download/actualisation/${props.file}_actualisation-2021.xlsx`}
              target="_blank"
              className="text-decoration-underline"
            >
              <i className="bi bi-filetype-xlsx"></i> {props.title} - Empreintes
              des branches d'activité - Année {props.year} (Actualisation
              2021).xlsx
            </a>
            <Button
              variant="secondary"
              size="sm"
              href={`/download/actualisation/${props.file}_actualisation-2021.xlsx`}
              target="_blank"
            >
              <i className="bi bi-filetype-xlsx"></i> Télécharger
            </Button>
          </div>
      </Container>
    </section>
  );
};

export default DownloadFile;
