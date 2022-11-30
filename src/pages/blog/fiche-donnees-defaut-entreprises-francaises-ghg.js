import React from "react";

import { Button, Container, Image } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

const Post = () => {
  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle | Fiche méthodologique – Intensité d’émission de
          gaz à effet de serre
        </title>
      </Helmet>
      <PageHeader
        title="Fiche méthodologique – Intensité d’émission de gaz à effet de serre  "
        prev={"blog"}
        prevTitle={"blog"}
        path={"blog/fiche-donnees-defaut-entreprises-francaises-ghg"}
      />
      <Container>
        <div className="article">
          <h3>
            La production des données par défaut pour les entreprises française
          </h3>
          <h4></h4>
          <div className="post-meta">
            <p>Publié le 19 juillet 2022</p>
          </div>
          <div className="post-image">
            <Image
              src="/images/articles/fiche-methodologique-2.jpg"
              className="img-fluid"
              alt="Fiche méthodologique"
            />
          </div>

          <div className="post-content ">
            <p>
              L’indicateur 
              <a href="/indicateurs/ghg"><strong>« Intensité d’émission de gaz à effet de serre »</strong> (codifié GHG)</a>
              a pour but d’informer sur l’intensité d’émission de gaz à effet de
              serre de la production d’une entreprise. Il s’agit donc d’estimer,
              par euro produit, la quantité de gaz à effet de serre émise (en
              gramme de CO2 équivalent).
            </p>
            <p>
              Au-delà des émissions directes de l’entreprise sur son périmètre
              opérationnel, il convient de tenir compte des émissions indirectes
              liées aux consommations intermédiaires (émissions pour la
              production des intrants). Cela permet de couvrir l’ensemble de la
              chaîne de valeur amont, et le périmètre de la valeur produite.
            </p>
            <p>
              L’indicateur vise ainsi à offrir une information sur l’empreinte
              de la production avec une approche basée sur les flux économiques
              et des facteurs par entreprise, accordant de ce fait une primauté
              aux entreprises sollicitées plutôt qu’aux produits achetés.
            </p>
          </div>
          <Button
            href="https://lasocietenouvelle.org/LSN_Fiche-methodologique_production-des-donnees-par-defaut-pour-les-entreprises-francaises_indicateur-ghg.pdf"
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
