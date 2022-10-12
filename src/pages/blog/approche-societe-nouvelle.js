import React from "react";

import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

const Post = () => {
  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle | Vidéo - Pourquoi faire évoluer la comptabilité
          des entreprises?
        </title>
      </Helmet>
      <PageHeader
        title="Pourquoi faire évoluer la comptabilité des entreprises?"
        prev={"blog"}
        prevTitle={"blog"}
        path={"blog/approche-societe-nouvelle"}
      />
      <Container>
        <div className="article">
          <div className="post-meta">
          <h3>Pourquoi faire évoluer la comptabilité des entreprises?</h3>
            <p>Publié le 03 juin 2022</p>
          </div>
          <iframe
            width="760"
            height="515"
            src="https://www.youtube.com/embed/XTdiVnrm-BI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <p>
            Ce constat avait déjà été formulé en 2018 par Nicole NOTAT et
            Jean-Dominique SENARD au sein de leur rapport "L’entreprise, objet
            d’intérêt collectif" : « toute compréhension de l’entreprise passe
            par sa comptabilité. Or les enjeux sociaux et environnementaux qui
            doivent être considérés en sont absents [...] Il faut permettre aux
            organisations de comprendre ces enjeux et d’identifier les options
            que leur offre la comptabilité. La comptabilité n’est figée que par
            nos verrous politiques, sociaux, techniques ou culturels, elle peut
            donc intégrer de nouvelles dimensions»
          </p>

          <p>
            Il est primordial que chaque entreprise mesure, pour les enjeux
            sociaux et environnementaux critiques, les impacts de le valeur
            qu’elle produit. La construction d’une économie durable ne pourra se
            faire efficacement que si nous sommes capables d’identifier les
            entreprises qui créent de la valeur en limitant leurs impacts
            négatifs.
          </p>


          <h4>L'objectif de La Société Nouvelle </h4>

          <p>
            ➡️ Accélérer la transition écologique et sociale en fournissant des
            données aux agents économiques.
          </p>
          <p>
            ➡️ Identifier les entreprises qui produisent de la valeur
            durablement.
          </p>

          <h4>Pourquoi faire évoluer la comptabilité ?</h4>

          <p>
            Chaque entreprise se doit désormais de s’assurer que la valeur
            qu’elle produit est compatible avec la transition écologique et
            sociale. Notre conviction est également qu’elles se doivent de faire
            preuve de transparence sur l’empreinte qu’elle laisse vis-à-vis de
            la société et de l’environnement ; pour justement identifier celles
            qui sont les plus performantes.
          </p>

          <p>
            C’est là qu’intervient la nécessité de compléter les pratiques
            comptables : pour que l’entreprise ait conscience de ses impacts,
            qu’elle se dote de ratios de performance extra-financiers
            comparables, et qu’elle puisse en rendre compte (de ses progrès, de
            cette performance) à ses parties prenantes.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Post;
