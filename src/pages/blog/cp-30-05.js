import React from "react";

import { Button, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

const Post = () => {
  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle fait bouger la comptabilité des entreprises pour y
          intégrer les objectifs de développement durable
        </title>
      </Helmet>
      <PageHeader
        title="Communiqué de presse du 30 mai 2022"
        prev={"blog"}
        prevTitle={"blog"}
        path={"blog/cp-30-05"}
      />
      <Container>
        <div className="article">
          <h3>
            La Société Nouvelle fait bouger la comptabilité des entreprises pour
            y intégrer les objectifs de développement durable
          </h3>
          <div className="post-meta">
            <p>Publié le 30 mai 2022</p>
          </div>

          <div className="post-content ">
            <p>
              La Société Nouvelle est une start-up lilloise domiciliée à
              Euratechnologies. Sa mission est d’apporter de la transparence sur
              les impacts de la production des entreprises, sur des enjeux clefs
              de développement durable. Elle promeut la mesure de l’Empreinte
              Sociétale de l'Entreprise : un panel d'indicateurs exprimant les
              impacts d'un euro de chiffre d’affaires sur les enjeux ainsi
              ciblés.
            </p>
            <p>
              Le modèle d’indicateurs permet d’intégrer dans les tableaux de
              bord comptables des dimensions sociétales et de mettre en place
              une traçabilité des impacts le long des chaines de valeur. La
              volonté est ainsi d’accélérer la transition écologique et sociale
              en apportant des données pertinentes aux entreprises et de la
              transparence aux consommateurs.
            </p>

            <p>
              La démarche s’inscrit dans une ambition de faire évoluer les
              normes comptables pour une économie durable.
            </p>
            <h4>Nos convictions</h4>
            <p>
              Aujourd’hui, nous sommes dans une situation où notre économie
              n’est pas soutenable avec des risques majeurs pour notre société
              tels que le dérèglement climatique, les inégalités sociales et la
              destruction de la biodiversité.
            </p>
            <p>
              Chaque entreprise se doit désormais de s’assurer que la valeur
              qu’elle produit est compatible avec la transition écologique et
              sociale. La Société Nouvelle porte également la conviction que ces
              dernières se doivent de faire preuve de transparence sur
              l’empreinte qu’elles laissent vis-à-vis de la société et de
              l’environnement.
            </p>
            <p>
              Tout le but de notre approche est que les entreprises aient
              conscience de leurs impacts, qu’elles se dotent de ratios de
              performance extra-financiers comparables, et qu’elles rendent
              compte de cette performance à leurs parties prenantes.
            </p>
            <p>
              L’un des principaux objectifs de la démarche est de pouvoir
              identifier les entreprises dont la production est la plus
              soutenable pour orienter les consommations vers celles-ci. Il sera
              difficile de construire une économie durable si l'on ne sait pas
              quelles sont les entreprises qui produisent de la valeur
              "durablement" et si elles-mêmes ne le savent pas.
            </p>
            <h4>Les intérêts de mesurer son empreinte sociétale</h4>
            <p>
              L’enjeu premier de l’Empreinte Sociétale pour les entreprises est
              de leur permettre de se positionner vis-à-vis d’objectifs clefs de
              développement durable. Les indicateurs obtenus permettent un
              rapprochement avec les branches d’activités et des trajectoires
              cibles. Elles deviennent ainsi en capacité d’agir à la hauteur des
              enjeux, d’anticiper de potentiels risques sur leurs activités et
              d’assurer leur pérennité.
            </p>
            <p>
              Lorsqu’elle est publiée, l’information produite permet également
              de valoriser la performance de l’entreprise auprès de ses clients.
              Elle constitue une démarche de transparence et justifie la volonté
              d'avoir des activités compatibles avec les objectifs nationaux à
              atteindre.
            </p>
            <p>
              La mesure de l’empreinte sociétale s’appuie sur les pratiques
              comptables déjà existantes : elle est ainsi applicable et
              accessible à toute entreprise. Des cabinets comptables s’équipent
              d’ores et déjà pour fournir ce service à leurs clients.
            </p>
            <h4>Les ressources que La Société Nouvelle met à disposition</h4>
            <p>
              Dans un premier temps, la méthodologie est publique et libre
              d’exploitation. Elle est à disposition de tous ceux qui veulent la
              mettre en oeuvre et la diffuser.
            </p>
            <p>
              Ensuite, une application web open source (licence CeCILL) a été
              développée pour faciliter l’obtention des indicateurs. Elle fait
              le lien entre les écritures comptables, les données publiées des
              fournisseurs, et les impacts directs de l’entreprise. Son
              utilisation est gratuite pour n’opposer aucun obstacle à
              l’accessibilité de cette démarche
            </p>
            <p>
              Enfin, La Société Nouvelle administre une base de données ouverte
              pour centraliser les Empreintes Sociétales des Entreprises et
              faciliter leur exploitation. Grâce à ce répertoire central, les
              données peuvent être directement intégrées au sein d’autres
              applications, logiciels et programmes existants.
            </p>
            <p>
              Ces ressources ouvrent la voie à un système d’information national
              sur les impacts de la production des entreprises et à une
              évolution de la comptabilité pour y intégrer des enjeux de
              développement durable. Elles constituent une réponse à la
              problématique soulevée en 2018 par le rapport NOTAT-SENARD : «
              Toute compréhension de l’entreprise passe par sa comptabilité. Or
              les enjeux sociaux et environnementaux qui doivent être considérés
              en sont absents ».
            </p>
          </div>
          <Button href="/cp/CP-LaSocieteNouvelle-30_05_2022.docx" variant="secondary">
          <i className="bi bi-download"></i> Télécharger le communiqué
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Post;
