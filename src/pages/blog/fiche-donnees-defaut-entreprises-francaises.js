import React from "react";

import { Button, Container, Image} from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

const Post = () => {
  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle | Fiche méthodologique - La production des données
          par défaut pour les entreprises française
        </title>
      </Helmet>
      <PageHeader
        title="Fiche méthodologique - La production des données par défaut pour les entreprises française  "
        prev={"blog"}
        prevTitle={"blog"}
        path={"blog/fiche-donnees-defaut-entreprises-francaise"}
      />
      <Container>
        <div className="article">
          <h3>
            La production des données par défaut pour les entreprises française
          </h3>
          <div className="post-meta">
            <p>Publié le 04 mai 2022</p>
          </div>
          <div className="post-image">
            <Image
              src="/images/articles/fiche-methodologique.jpg"
              className="img-fluid"
              alt="Fiche méthodologique"
            />
          </div>

          <div className="post-content ">
            <p>
              L’indicateur <a href="/indicateurs/eco">« Contribution à l’Economie nationale » </a>(présent au
              sein du panel d’indicateurs que forme l’Empreinte Sociétale) a
              pour but d’informer sur la contribution à l’économie nationale de
              la production d’une entreprise. Il s’agit d’estimer, par euro
              produit, la part de la valeur issue de la production intérieure.
            </p>
            <p>
              A l’échelle d’une entreprise, la mesure de l’indicateur fait appel
              aux empreintes sociétales des fournisseurs d’achats et
              d’immobilisations. Dans les faits, ces informations – empreintes
              sociétales des fournisseurs – sont encore largement manquantes.
              Des valeurs par défaut sont donc proposées pour chaque entreprise
              française.
            </p>
            <p>
              La présente note vise à expliquer pas à pas les hypothèses faites
              et la démarche méthodologique employée pour obtenir ces valeurs
              par défaut à l’échelle des entreprises françaises, pour
              l’indicateur ci-mentionné relatif à la contribution à l’économie
              nationale.
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
