import React from "react";
import { Button } from "react-bootstrap";

const DownloadFile = (props) => {
  return (
    <div className="alert-info p-4 mt-5">
      <h4 className="mb-4 fw-bold">Téléchargement des données</h4>
      <div className="d-flex justify-content-between align-items-center">
        <a href={`/download/2020/${props.file}.xlsx`} target="_blank" className="text-decoration-underline">
        <i className="bi bi-filetype-xlsx"></i> {props.title} - Empreintes des branches d'activité - Année {props.year}.xlsx
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
      <div className="d-flex justify-content-between align-items-center mt-2">
        <a
          href={`/download/actualisation/${props.file}_actualisation-2021.xlsx`}
          target="_blank"
          className="text-decoration-underline"
        >
          <i className="bi bi-filetype-xlsx"></i> {props.title} - Empreintes des branches d'activité - Année {props.year} (Actualisation 2021).xlsx
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
    </div>
  );
};

export default DownloadFile;
