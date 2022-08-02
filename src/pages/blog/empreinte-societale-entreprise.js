import React from "react";

import {  Container} from "react-bootstrap";
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
            <Image
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
            Le choix des indicateurs s’appuient sur les 17 Objectifs de Développement Durable émis par l’ONU (Organisation des Nations Unies) en 2015, pour l’horizon 2030. Les indicateurs sont évolutifs – ajout, modification de la définition, retrait – pour cibler les enjeux critiques et pertinents à l’échelle de l’entreprise. Un comité de gouvernance des indicateurs est en cours de constitution.
            </p>
            <p>
            L’Empreinte Sociétale complète ainsi une approche RSE, en ciblant des enjeux communs sur lesquels chaque entreprise doit rendre compte de son impact (même s’il ne s’agit pas d’un enjeu majeur pour elle).
            </p>
          </div>
       
        </div>
      </Container>
    </>
  );
};

export default Post;
