import { useState } from "react";
import { useRouter } from 'next/router';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

import axios from "axios";

import ErrorAlert from "../../components/Error";
import PaginatedLegalunit from "../../components/PaginatedLegalunit";

const portail = () => {
  const [search, setSearch] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [legalUnits, setLegalUnits] = useState([]);
  const [error, setError] = useState();
  const router = useRouter();

  const inputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode == 13) {
      handleClick();
      return true;
    } else {
      return false;
    }
  };

  const handleClick = async () => {
    setLegalUnits([]);
    setError();
    setIsLoading(true);
    await searchLegalUnits(search);
  };

  const searchLegalUnits = async (search) => {
    // replace accents
    let string = search
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase();

    await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/legalunit/${string}`, {
        timeout: 15000,
      })
      .then((response) => {
        if (response.data.header.code == 200) {
          const legalUnits = response.data.legalUnits;
          if (legalUnits.length === 1) {
            const siren = legalUnits[0].siren;
          // Redirect to the specific company page 
            router.push(`/portail/company/${siren}`);
          } else {
            setLegalUnits(legalUnits);
          }
        } else {
          setError(response.data.header.code);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setError(504);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle | Portail des empreintes sociétales des
          entreprises françaises
        </title>

        <meta
          property="og:title"
          content="Portail des empreintes sociétales des
          entreprises françaises"
        />
        <meta
          property="og:url"
          content="https://lasocietenouvelle.org/portail"
        />
        <meta
          property="og:description"
          content="Consultez librement les données publiées sur les impacts de la valeur produite par les entreprises françaises."
        />
        <meta
          property="og:image"
          content="/portail.jpg"
        />
      </Helmet>
      <section className="open-data-portal">
        <Container>
          <div className="text-center">
            <h1>
              Toute l'information sur <br /> <b>l'empreinte sociétale</b> des
              entreprises
            </h1>
            <p className="pt-2 fs-5 mb-5">
              Consultez librement les données publiées sur les impacts de la
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
                        disabled={!search}
                      >
                        Rechercher
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          {isLoading && (
            <div className="text-center">
              <h4>Recherche en cours </h4>
              <div className="dot-pulse m-auto"></div>
            </div>
          )}
          {legalUnits.length > 0 && (
            <section className="result bg-light p-4 rounded-3">
              {legalUnits.length > 1 ? (
                <p>
                  <b>{legalUnits.length}</b> entreprises correspondent à votre
                  recherche.
                </p>
              ) : (
                <p>
                  <b>{legalUnits.length}</b> entreprise correspond à votre
                  recherche.
                </p>
              )}

              <PaginatedLegalunit itemsPerPage={10} data={legalUnits} />
            </section>
          )}
          {error && <ErrorAlert code={error} />}
        </Container>
      </section>
    </>
  );
};

export default portail;
