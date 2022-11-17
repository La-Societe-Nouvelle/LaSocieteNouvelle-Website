import React from "react";
import { Button } from "react-bootstrap";

const DownloadFile = (props) => {
  return (
    <div className="alert-info p-4">
      <h4 className="mb-5">Téléchargement des données</h4>
      <div className="d-flex justify-content-between align-items-center">
        <a href={`/defaultdata/${props.file}.xlsx`} target="_blank">
          {props.title} - Empreintes des branches d'activité - Année 2020.xlsx
        </a>

        <Button
          variant="secondary"
          size="sm"
          href={`/defaultdata/${props.file}.xlsx`}
          target="_blank"
        >
          <i className="bi bi-filetype-xlsx"></i> Télécharger
        </Button>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3 border-top pt-3">
        <a
          href={`/defaultdata/${props.file}_actualisation-2021.xlsx`}
          target="_blank"
        >
          {props.title} - Empreintes des branches d'activité - Année 2020
          (Actualisation 2021).xlsx
        </a>
        <Button
          variant="secondary"
          size="sm"
          href={`/defaultdata/${props.file}_actualisation-2021.xlsx`}
          target="_blank"
        >
          <i className="bi bi-filetype-xlsx"></i> Télécharger
        </Button>
      </div>

      <p className=""></p>
    </div>
  );
};

export default DownloadFile;
