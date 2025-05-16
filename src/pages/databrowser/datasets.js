// La Société Nouvelle

//-- React
import { Helmet } from "react-helmet";

//-- Bootstrap
import { Button, Col, Container, Image, Row } from "react-bootstrap";

//-- Components
//..

const DataBrowser = () => 
{
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Données statistiques</title>
        <meta
          property="og:url"
          content="https://lasocietenouvelle.org/databrowser"
        />
        <meta
          property="og:description"
          content="Consultez les données statistiques produites par La Société Nouvelle."
        />
      </Helmet>

      <section className="">
        <Container fluid className="mt-1 px-5">
          <Row className="ms-5">
            <h2>Liste des jeux de données</h2>
            <Col className="ms-5 pt-1 pb-5 d-flex flex-column align-self-stretch">
              <h3 className="my-3">Données historiques des empreintes des activités économiques</h3>
              <div className="mb-2 ms-3">
                <a href="/databrowser/dataset/macro_fpt">
                  <i className="bi bi-database-fill me-2"/>Empreintes des industries - NACE Rév.2 A64 (macro_fpt)
                </a>
              </div>
              <div className="mb-2 ms-3">
                <a href="/databrowser/dataset/macro_fpt_a88">
                  <i className="bi bi-database-fill me-2"/>Empreintes des divisions - NACE Rév.2 A88 (macro_fpt_a88)
                </a>
              </div>
              <div className="mb-2 ms-3">
                <a href="/databrowser/dataset/macro_fpt_a38">
                  <i className="bi bi-database-fill me-2"/>Empreintes des branches - NACE Rév.2 A38 (macro_fpt_a38)
                </a>
              </div>
              <h3 className="my-3">Empreintes tendancielles des activités économiques</h3>
              <div className="mb-2 ms-3">
                <a href="/databrowser/dataset/macro_fpt_trd">
                  <i className="bi bi-database-fill me-2"/>Empreintes des industries - NACE Rév.2 A64 (macro_fpt_trd)
                </a>
              </div>
              <div className="mb-2 ms-3">
                <a href="/databrowser/dataset/macro_fpt_trd_a88">
                  <i className="bi bi-database-fill me-2"/>Empreintes des divisions - NACE Rév.2 A88 (macro_fpt_trd_a88)
                </a>
              </div>
              <div className="mb-2 ms-3">
                <a href="/databrowser/dataset/macro_fpt_trd_a38">
                  <i className="bi bi-database-fill me-2"/>Empreintes des branches - NACE Rév.2 A38 (macro_fpt_trd_a38)
                </a>
              </div>
              <h3 className="my-3">Trajectoires cibles des empreintes des activités économiques</h3>
              <div className="mb-2 ms-3">
                <a href="/databrowser/dataset/macro_fpt_tgt">
                  <i className="bi bi-database-fill me-2"/>Empreintes des industries - NACE Rév.2 A64 (macro_fpt_tgt)
                </a>
              </div>
              <div className="mb-2 ms-3">
                <a href="/databrowser/dataset/macro_fpt_tgt_a88">
                  <i className="bi bi-database-fill me-2"/>Empreintes des divisions - NACE Rév.2 A88 (macro_fpt_tgt_a88)
                </a>
              </div>
              <div className="mb-2 ms-3">
                <a href="/databrowser/dataset/macro_fpt_tgt_a38">
                  <i className="bi bi-database-fill me-2"/>Empreintes des branches - NACE Rév.2 A38 (macro_fpt_tgt_a38)
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DataBrowser;