import React from "react";
import { Helmet } from "react-helmet";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

import DownloadFile from "../../components/indic/DownloadFile";
import PageHeader from "../../components/PageHeader";
import TrendsChartBox from "../../components/indic/TrendsChartBox";

const eco = () => {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Contribution à l'Economie Nationale</title>
      </Helmet>
      <PageHeader
        title="Contribution à l'Economie Nationale"
        prev={"indicateurs"}
        prevTitle={"Liste des indicateurs"}
        path={"indicateurs/eco"}
      />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <Image src="/ESE/eco.svg" height="80" className="mb-3" />
              <p>
                Part de la valeur produite sur le territoire français, exprimée
                en % (de la valeur).
              </p>
              <p>
                L’indicateur vise à informer sur la localisation des activités
                (en France ou à l’étranger).
              </p>
              <p>
                Il permet de rendre compte de la part de la valeur produite en
                France et celle issue d’importations. Il s’inscrit dans une
                dynamique de relocalisation des activités et ouvre la voie à une
                information plus complète sur la diffusion des dépenses (part de
                la valeur produite à l'échelle locale, européenne, etc.).
              </p>
              <p>
                *Note : L’indicateur s’intéresse à la production de la valeur et
                à sa redistribution. La valeur ajoutée d’une entreprise
                française peut être entièrement contributrice à l’économie
                nationale bien que des rémunérations ou des dividendes soient
                versés à l’étranger.*
              </p>
              <p>
                <b>Code : </b> ECO
              </p>
              <Button
                variant="secondary"
                href="https://docs.lasocietenouvelle.org/empreinte-societale/indicateurs/indicateur-eco"
                target="_blank"
                rel="noreferrer"
              >
                Documentation
              </Button>
            </Col>
            <Col className="odd small">
              <h3>Objectifs de développement durable</h3>
              <Image
                id="logo-odd"
                src="/images/odd/F-WEB-Goal-08.png"
                alt="logo odd"
                className="mb-3"
              />
              <Image
                id="logo-odd"
                src="/images/odd/F-WEB-Goal-09.png"
                alt="logo odd"
                className="mb-3"
              />
              <Image
                id="logo-odd"
                src="/images/odd/F-WEB-Goal-12.png"
                alt="logo odd"
                className="mb-3"
              />
              <p>
                8.3 : Promouvoir des politiques axées sur le développement qui
                favorisent des activités productives, la création d’emplois
                décents, l’entrepreneuriat, et stimulent la croissance des
                micro-entreprises et des petites et moyennes entreprises.
              </p>
              <p>
                8.5 : D’ici à 2030, parvenir au plein emploi productif et
                garantir à toutes les femmes et à tous les hommes, y compris les
                jeunes et les personnes handicapées, un travail décent et un
                salaire égal pour un travail de valeur égale.
              </p>
              <p>
                9.2 : Promouvoir une industrialisation durable qui profite à
                tous et, d’ici à 2030, augmenter nettement la contribution de
                l’industrie à l’emploi et au produit intérieur brut, en fonction
                du contexte national, et la multiplier par deux dans les pays
                les moins avancés.
              </p>
              <p>
                12.b : Mettre au point et utiliser des outils de contrôle des
                impacts sur le développement durable, pour un tourisme durable
                qui crée des emplois et met en valeur la culture et les produits
                locaux.
              </p>
            </Col>
          </Row>

          <div className="mt-5 pt-4 border-top">
            <h3>Impact direct mesuré</h3>
            <p>
              <b>Grandeur mesurée : </b>Valeur nette créée sur le territoire
              français (en euros). La valeur nette créée correspond à la valeur
              ajoutée nette : production réduite des consommations
              intermédiaires et des dotations aux amortissements.
            </p>

            <p>
              Note : L'impact direct est associé à la valeur ajoutée nette de
              l'entreprise. Pour la valeur produite, la mesure est complétée par
              les impacts indirects liés aux consommations et aux
              amortissements, obtenus à partir des données des entreprises
              sollicitées.
            </p>
          </div>
        </Container>
      </section>

      <TrendsChartBox indic="ECO" />

      <DownloadFile
        year={"2018"}
        file={"ECO-donnees-branches-2018"}
        title={"Contribution à l'Economie Nationale"}
      />

      <section className="info-supp pt-2">
        <Container className="border-top pt-4">
          <h5 className="">Pour aller plus loin </h5>
          <ul>
            <li>
              <a
                href="https://www.insee.fr/fr/statistiques/4166056"
                target="_blank"
              >
                Insee Première n°1756 - "Made In France
              </a>
            </li>
            <li>
              EUROSTAT{" "}
              <a
                href="https://ec.europa.eu/eurostat/cache/metadata/fr/nama10_esms.htm"
                target="_blank"
              >
                Annual national accounts (Metadata)
              </a>
            </li>
            <li>
              <a
                href="https://ec.europa.eu/eurostat/cache/metadata/fr/ext_tec_sims.htm"
                target="_blank"
              >
                International trade in goods - trade by enterprise
                characteristics (Metadata)
              </a>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default eco;
