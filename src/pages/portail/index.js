import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

const portail = () => {
  const [input, setInput] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [infoResults, setInfo] = useState({ nbResults: 0 });
  const [results, setResults] = useState([]);

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode == 13) {
      handleClick();
      return true;
    } else {
      return false;
    }
  };

  const handleClick = () => {
    if (input !== undefined && input !== "") {
      setIsLoaded(false);
      setIsLoading(true);
      getResults(input);
    }
  };

  const getResults = (input) => {
    fetch(
      "https://systema-api.azurewebsites.net/api/v2/search?denomination=" +
        input,
      { method: "get" }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.header.statut == 200) {
          setIsLoaded(true);
          setIsLoading(false);
          console.log(response);
          setInfo(response.infoResults);
          setResults(Object.values(response.results));
        } else {
          setIsLoading(false);

          setInfo({ nbResults: 0 });
          setResults();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Helmet>
        <title>La société Nouvelle | Portail d'accès aux données </title>
      </Helmet>
      <div className="open-data-portal">
        <section className="text-center">
          <Container>
            <h1>
              Toute l'information sur <br /> <b>l'empreinte sociétale</b> des
              entreprises
            </h1>
            <p className="pt-2 fs-5 mb-5">
              Accédez librement aux données publiées sur les impacts de la
              valeur produite par les entreprises françaises.
            </p>
            <Row className="mt-5">
              <Col md={{ span: 6, offset: 3 }}>
                <Row className="justify-content-md-center search-form">
                  <Col lg={8} className="p-0">
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Nom de l'entreprise ou numéro de Siren"
                      onChange={inputChange}
                      onKeyDown={handleKeyPress}
                    />
                  </Col>
                  <Col lg={4} className="p-0 bg-secondary">
                    <div className="d-grid gap-2">
                      <Button
                        variant="link"
                        type="submit"
                        onClick={handleClick}
                        disabled={
                          input !== undefined && input !== "" ? false : true
                        }
                      >
                        Rechercher
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        {isLoading && (
          <section className="results  bg-light">
            <Container>
              <div className="alert alert-info text-center">
                <p>Recherche en cours </p>
                <div className="dot-pulse m-auto"></div>
              </div>
            </Container>
          </section>
        )}
        {isLoaded && results.length == 0 && (
          <section className="results bg-light">
            <Container>
              <p className="alert alert-info">Aucun résultat</p>
            </Container>
          </section>
        )}

        {isLoaded && results.length > 0 && (
          <section className="results bg-light">
            <Container>
              <h2 className="mb-0">Résultats de la recherche</h2>
              {results.length > 1 ? (
                <p>
                  <b>{results.length}</b> entreprises trouvées.
                </p>
              ) : (
                <p>
                  <b>{results.length}</b> entreprise trouvée.
                </p>
              )}

              {results.map((item, index) => (
                <div className="result" key={index}>
                  <Row className="align-items-center">
                    <Col lg={9}>
                      <h3 className="h5">{item.denomination}</h3>
                      <Row className="align-content-center">
                        <Col>
                          <h4 className="h6">Siren</h4>
                          <p>{item.siren}</p>
                        </Col>
                        <Col>
                          <h3 className="h6">Activité</h3>
                          <p>
                            {item.activitePrincipaleLibelle} (
                            {item.activitePrincipale})
                          </p>
                        </Col>
                        <Col>
                          <h3 className="h6">Domiciliation</h3>
                          <p>
                            {item.communeSiege} ({item.codePostalSiege})
                          </p>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <div className="text-end">
                        <a
                          className="btn btn-outline-secondary"
                          href={"portail/company/" + item.siren}
                        > Voir l'empreinte <i className="bi bi-arrow-right-circle-fill"></i>
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </Container>
          </section>
        )}
      </div>
    </>
  );
};

export default portail;
