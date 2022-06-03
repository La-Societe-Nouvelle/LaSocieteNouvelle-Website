import React from "react";

import {  Container} from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

const Post = () => {
  return (
    <>
      <Helmet>
        <title>
          La société Nouvelle | Vidéo - L'approche de la société nouvelle
        </title>
      </Helmet>
      <PageHeader
        title=" L'approche de la société nouvelle"
        prev={"blog"}
        prevTitle={"blog"}
        path={"blog/approche-societe-nouvelle"}
      />
      <Container>
        <div className="article">
          <h3>
          L'approche de La Société Nouvelle
          </h3>
          <div className="post-meta">
            <p>Publié le 03 juin 2022</p>
          </div>

          <video width="800" title="La Société Nouvelle" preload="auto" autoplay controls>
            <source src="/video-lsn.mp4" type="video/mp4" />
            <p>Votre navigateur ne prend pas en charge les vidéos HTML5.
                Voici <a href="/video-lsn.mp4">un lien pour télécharger la vidéo</a>.</p>
            </video>

            <ol className="my-4">
                <li>
                L'objectif de La Société Nouvelle

                </li>
                <li>
                Pourquoi faire évoluer la comptabilité ?
                </li>
                <li>
                Les évolutions à mettre en oeuvre
                </li>
            </ol>


        </div>
      </Container>
    </>
  );
};

export default Post;
