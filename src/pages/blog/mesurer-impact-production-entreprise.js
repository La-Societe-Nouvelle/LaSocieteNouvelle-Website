import React from "react";

import {  Container, Image} from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

const Post = () => {
  return (
    <>
      <Helmet>
        <title>
          La société Nouvelle | Pourquoi faut-il mesurer les impacts de la valeur produite des entreprises?
        </title>
      </Helmet>
      <PageHeader
        title="Pourquoi faut-il mesurer les impacts de la valeur produite des entreprises?"
        prev={"blog"}
        prevTitle={"blog"}
        path={"blog/mesurer-impact-production-entreprise"}
      />
      <Container>
        <div className="article">
          <h3>
          Pourquoi faut-il mesurer les impacts de la valeur produite des entreprises?
          </h3>
          <div className="post-meta">
            <p>Publié le 13 avril 2022</p>
          </div>
          <div className="post-image">
            <Image
              src="/images/articles/impact.jpg"
              className="img-fluid"
              alt="Impact "
            />
          </div>

          <div className="post-content ">
            <p>
            Mesurer les impacts de la valeur produite c'est-à-dire les impacts liés à un euro de production permet de connaître la capacité d’une entreprise à produire de la valeur en limitant ses impacts négatifs ou en maximisant ses impacts positifs.            </p>
            <p>
            Elle permet ainsi d’identifier les entreprises les plus performantes sur les enjeux clefs de développement durable. Elle est également comparable aux agrégats macroéconomiques et permet aux entreprises de se positionner vis-à-vis de leur branche d’activité et des objectifs collectifs à atteindre.
            </p>
            <p>
            Ex: Sur l’enjeu du climat, il s’agira de mesurer la quantité de gaz à effet de serre émise pour un euro de production (en gCO2e/€) et de réduire cette intensité sous le seuil pour respecter les budgets carbone liés aux activités économiques.            </p>
            <p>
            La démarche permet ainsi de disposer de nouveaux ratios de performance, comparables, sur des dimensions sociales et environnementales clefs pour un développement durable.
            Ils permettent à l’entreprise de se positionner par rapport à sa branche et aux objectifs sociaux et environnementaux à atteindre :
            </p>
            <ul>
                <li>
                Ils permettent d’identifier les entreprises les plus performantes sur des enjeux clefs de développement durable 
                </li>
                <li>
                Ils permettent d’estimer les impacts liés à une dépense et de mettre en place une traçabilité le long des chaines de valeur 
                </li>
                <li>
                Enfin, ils permettent de sortir d’une approche purement financière et d’apprécier le chiffre d’affaires et les autres agrégats financiers de manière plus juste.

                </li>
            </ul>


          </div>
       
        </div>
      </Container>
    </>
  );
};

export default Post;
