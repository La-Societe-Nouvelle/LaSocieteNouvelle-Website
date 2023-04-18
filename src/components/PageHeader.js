import React from "react";
import { Container } from "react-bootstrap";

function PageHeader({ title, path, prev, prevTitle, hasBreadcrumb }) {
  return (
    <header className="bg-light pt-4 pb-5">
      <Container>
        {hasBreadcrumb && (
          <div className="breadcrumb">
            <a href="/">Accueil</a> /{" "}
            {prev && <a href={"/" + prev}>{prevTitle} /</a>}{" "}
            <a href={"/" + path}>{title}</a>
          </div>
        )}

        <h2 className="text-center mt-4">{title}</h2>
      </Container>
    </header>
  );
}

export default PageHeader;
