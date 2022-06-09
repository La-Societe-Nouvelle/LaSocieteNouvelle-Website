import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

const Post = () => {
  return (
    <>
      <Helmet>
        <title>
          La société Nouvelle | Mesurer, informer, pour une économie durable
        </title>
      </Helmet>
      <PageHeader
        title="Mesurer, informer, pour une économie durable"
        prev={"blog"}
        prevTitle={"blog"}
        path={"blog/la-societe-nouvelle"}
      />
      <Container>
          <div className="article">
          <h3>Il était une fois La Société Nouvelle</h3>
          <div className="post-meta">
                      <p>Publié le 04 mars 2022</p>
                    </div>
           <div className="post-image">
           <img
                  src="/images/articles/equipe-la-societe-nouvelle.jpg"
                  className="img-fluid"
                  alt="L'équipe de la société nouvelle"
                />
           </div>

            <div className="post-content ">
              <p>
                C’est avec la volonté de contribuer à la construction d’une
                société durable que La Société Nouvelle prit son premier souffle
                : un nom choisi par l’envie de faire bouger les choses, pour
                marquer son engagement au service de cette transition.
              </p>
              <p>
                L’aventure commence en avril 2020, où Sylvain en dernière année
                à l’Ecole Centrale de Lille, initie le projet avec comme
                conviction que la transition écologique et sociale ne pourra se
                faire sans une information fiable et pertinente sur et pour les
                entreprises. Durant les premiers mois, l’approche comptable se
                précise, le premier panel d’indicateurs est constitué, la base
                de données ouverte est initialisée et le premier outil de calcul
                est élaboré.
              </p>

              <p>
                En septembre, la Société Nouvelle rejoint l’incubateur
                Euratechnologies à Lille pour structurer son développement.
                Depuis, elle n’a de cesse d’améliorer les ressources qu’elle met
                à disposition des entreprises et veille à rendre tous ses
                travaux publics et accessibles.
              </p>
              <p>
                En février 2022, l’équipe s’agrandit avec l’arrivée de Maëva,
                Laura et Joris. Désormais, l’objectif est d’accéler le
                déploiement de la méthode et de la parachever.
              </p>
              <h5>Aujourd’hui, qu’est-ce que La Société Nouvelle ?</h5>
              <p>
                C’est une initiative open data et open source dont la mission
                est de déployer un système d'information et de comptabilité et
                ainsi permettre aux entreprises de mesurer, sur des dimensions
                sociales et environnementales clefs, les impacts de la valeur
                qu’elles produisent.
              </p>
            </div>
            <Button href="/a-propos-la-societe-nouvelle" variant="secondary">En savoir plus</Button>
          </div>
      </Container>
    </>
  );
};

export default Post;
