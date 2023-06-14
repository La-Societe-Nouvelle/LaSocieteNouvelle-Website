import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

const DataBrowser = () => {

    const [error,setError] = useState(false);
    const [data, setData] = useState();

    const fetchData = async(endpoint) => {

    
        await axios
          .get(`https://api.lasocietenouvelle.org/macrodata/${endpoint}`, {
            timeout: 15000,
          })
          .then((response) => {
            if (response.data.header.code == 200) {
              setData(response.data.data);
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
          La Société Nouvelle | Accéder à l'ensemble des données statistiques
          produites par la société nouvelle
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
        <meta property="og:image" content="/portail.jpg" />
      </Helmet>
      <section className="open-data-brower">
        <Container>
          <Row>
            <Col lg={4}>
              <ul>
                <li>Données macroéconomiques des branches</li>
                <li>
                  Données macroéconomiques des branches pour les objectifs 2030
                </li>
              </ul>
            </Col>
            <Col>
           
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DataBrowser;
