import React from "react";

import { Button, Container} from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

const Post = () => {
  return (
    <>
      <Helmet>
        <title>
          La société Nouvelle | Qu’est-ce que l’Empreinte Sociétale de l’Entreprise ?
        </title>
      </Helmet>
      <PageHeader
        title="Qu’est-ce que l’Empreinte Sociétale de l’Entreprise ?"
        prev={"blog"}
        prevTitle={"blog"}
        path={"blog/empreinte-societale-entreprise"}
      />
      <Container>
        <div className="article">
          <h3>
          Qu’est-ce que l’Empreinte Sociétale de l’Entreprise ?
          </h3>
          <div className="post-meta">
            <p>Publié le 25 avril 2022</p>
          </div>
          <div className="post-image">
            <img
              src="/images/articles/illu-ese.jpg"
              className="img-fluid"
              alt="Empreinte Sociétale de l’Entreprise "
            />
          </div>

          <div className="post-content ">
            <p>
            L’Empreinte Sociétale de l’Entreprise (ESE) est un panel d’indicateurs sociaux et environnementaux relatif à la production vendue d’une entreprise. Elle exprime sur des dimensions sociales et environnementales (émissions de gaz à effet de serre, écart de rémunérations femmes/hommes, consommation d’eau, etc.) les impacts d’un euro de production vendue.
            </p>
            <p>
            Elle permet ainsi d’identifier les entreprises les plus performantes sur les enjeux clefs de développement durable. Elle est également comparable aux agrégats macroéconomiques et permet aux entreprises de se positionner vis-à-vis de leur branche d’activité et des objectifs collectifs à atteindre.
            </p>
            <p>
            L’Empreinte Sociétale s’applique à toute les structures tenant une comptabilité. Notre objectif est qu’elle soit publiée pour toutes les entreprises françaises, chaque année en fin d’exercice comptable ; et centralisée au sein d’un répertoire public tel que le répertoire SIRENE.
            </p>
            <p>
            Aujourd’hui le panel comprend <a href="/indicateurs">12 indicateurs</a> : 6 indicateurs socio-économiques et 6 indicateurs environnementaux.
            </p>
          </div>
          <Button
            href="https://lasocietenouvelle.org/LSN_Fiche-methodologique_production-des-donnees-par-defaut-pour-les-entreprises-francaises_indicateur-eco.pdf"
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
