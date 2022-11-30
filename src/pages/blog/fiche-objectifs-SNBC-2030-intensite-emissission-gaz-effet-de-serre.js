import React from "react";

import { Button, Container, Image } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

const Post = () => {
  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle | Fiche méthodologique – Production des objectifs
          sectoriels 2030 d’intensité d’émission de gaz à effet de serre
          compatibles avec la SNBC
        </title>
      </Helmet>
      <PageHeader
        title="Fiche méthodologique – Production des objectifs sectoriels 2030 d’intensité d’émission de gaz à effet de serre compatibles avec la SNBC "
        prev={"blog"}
        prevTitle={"blog"}
        path={
          "blog/fiche-objectifs-SNBC-2030-intensite-emissission-gaz-effet-de-serre"
        }
      />
      <Container>
        <div className="article">
          <h3>
            Fiche méthodologique n°3 - Objectifs sectoriels d’intensité
            d’émission de gaz à effet de serre selon la SNBC
          </h3>
          <h4></h4>
          <div className="post-meta">
            <p>Publié le 11 août 2022</p>
          </div>
          <div className="post-image">
            <Image
              src="/images/articles/fiche-methodo-snbc.jfif"
              className="img-fluid"
              alt="Fiche méthodologique"
            />
          </div>

          <div className="post-content ">
            <p>
              Par la loi du 17 août 2015 relative à la transition énergétique
              pour la croissance verte, l'Etat s'est doté d'une{" "}
              <a
                href="https://www.ecologie.gouv.fr/strategie-nationale-bas-carbone-snbc"
                target="_blank"
              >
                Stratégie Nationale Bas-Carbone (SNBC)
              </a>
              . Elle prend la forme d'une feuille de route détaillant les
              orientations et objectifs (budgets carbone quadri-annuels)
              français selon 6 grands secteurs :
            </p>
            <ul>
              <li> Transports </li>
              <li> Bâtiments (résidentiels et tertiaires) </li>
              <li> Agriculture </li>
              <li> Industrie manufacturière et Construction </li>
              <li> Energie </li>
              <li> Traitement des déchets </li>
            </ul>
            <p>
              Elle indique les objectifs et points de passage nécessaires au
              respect des engagements nationaux en matière de réduction du gaz à
              effet de serre, soit -55% par rapport aux niveaux de 1990 en 2030
              (Fit For 55 de l’UE) et une neutralité carbone en 2050 (Green Deal
              de l’UE).
            </p>
            <p>
              La SNBC ne fournit cependant pas de jalons à l’échelle des
              branches d’activités selon la Nomenclature des Activitités (NACE)
              et il est ainsi peu évident pour une entreprise de définir un
              objectif compatible avec cette feuille de route.
            </p>
            <p>
              Un travail de déclinaison de la SNBC à l’échelle des branches
              d’activité a donc été initié, afin de fournir à chaque entreprise
              une trajectoire attendue de l’intensité carbone de son activité
              (production). Cette information vient ainsi compléter les valeurs
              comparatives déjà existantes permettant de situer l’entreprise par
              rapport à sa branche.
            </p>
            <p>
              Cette nouvelle fiche méthodologique présente ainsi la méthode et
              les hypothèses d'obtention de ces données.
            </p>
          </div>
          <Button
            href="https://lasocietenouvelle.org/LSN_Fiche-methodologique_Production-des-objectifs-sectoriels-2030-compatibles-avec-SNBC_indicateur-ghg.pdf"
            variant="secondary"
            target="_blank"
          >
            Télécharger la fiche
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Post;
