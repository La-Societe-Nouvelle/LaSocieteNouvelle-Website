import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader";

const EngagementPage = () => {
  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Engagements - Numérique Responsable</title>
      </Helmet>

      <PageHeader
        title={" Numérique Responsable"}
        path={"/numerique-responsable"}
      />
      <section className="engagements">
        <Container>
          <Row className="align-items-center">
            <Col>
                <div>
                <h3>Engagements </h3>
                <p>
                    Les travaux de La Société Nouvelle s'appuient essentiellement
                    sur des ressources numériques : nous développons et mettons à
                    disposition des services web et nous réalisons des traitements
                    de données dans le cadre de nos travaux statistiques.
                </p>

                <p>
                    Dans ce cadre, nous souhaitons assumer notre responsabilité pour
                    l'essor d'un Numérique Responsable et mettre en oeuvre les
                    actions nécessaires pour agir à notre échelle.
                </p>

                <p>
                    Cette présente note décrit l'état de notre démarche, à travers 3
                    axes :
                </p>

                <ul>
                    <li><a href="#empreinte-environnementale">L'empreinte environnementale</a></li>
                    <li><a href="#accessibilite">L'accessibilité</a></li>
                    <li><a href="#licences-proprietes">Licences et Propriétés intellectuelles</a></li>
                    </ul>
                </div>
            </Col>
            <Col className="text-end">
                <Image src="/illustrations/engagement-numeric.svg" alt=""/>
            </Col>
          </Row>
            <hr></hr>
          <h3 id="empreinte-environnementale" >Empreinte environnementale</h3>
          <p>
            Pour réduire au maximum l'empreinte environnementale nos services et
            de nos activités, nos actions se portent sur deux points : le code
            et l'hébergement.
          </p>
          <h4>Code</h4>
          <p>
            Sur ce premier point, notre objectif est de limiter le poids de nos
            pages web et les opérations de traitement effectuées afin de réduire
            leur chargement et les ressources nécessaires à leur exécution. Une
            évaluation de notre site web et de l'application web Metriz a été
            réalisée via le service EcoIndex développé par GreenIT. Les
            résultats obtenus sont les suivants :
          </p>
          <h5>Site internet</h5>
          <p>
            Note : <span className="fw-bold">70 / 100</span>
          </p>

          <Table bordered>
            <thead>
              <tr>
                <th>Critère</th>
                <th>Valeur</th>
                <th>Médiane</th>
                <th>Cible</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Poids de la page</td>
                <td className="bg-success">0.787 Mo</td>
                <td>2.41 Mo</td>
                <td>1.024 Mo</td>
              </tr>
              <tr>
                <td>Complexité</td>
                <td className="bg-success">355 éléments</td>
                <td>693 éléments</td>
                <td>600 éléments</td>
              </tr>
              <tr>
                <td>Requêtes</td>
                <td className="bg-success">50 requêtes</td>
                <td>78 requêtes</td>
                <td>40 requêtes</td>
              </tr>
            </tbody>
          </Table>

          <h5>Application web : </h5>
          <p>
            Note : <span className="fw-bold">74 / 100</span>
          </p>

          <Table bordered>
            <thead>
              <tr>
                <th>Critère</th>
                <th>Valeur</th>
                <th>Médiane</th>
                <th>Cible</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Poids de la page</td>
                <td className="bg-danger">2.797 Mo*</td>
                <td>2.41 Mo</td>
                <td>1.024 Mo</td>
              </tr>
              <tr>
                <td>Complexité</td>
                <td className="bg-success">117 éléments</td>
                <td>693 éléments</td>
                <td>600 éléments</td>
              </tr>
              <tr>
                <td>Requêtes</td>
                <td className="bg-success">39 requêtes</td>
                <td>78 requêtes</td>
                <td>40 requêtes</td>
              </tr>
            </tbody>
          </Table>
          <p className="small">
            *Le poids de la page s’explique par le fonctionnement « local » de
            l’application, impliquant d’inclure l’ensemble des scripts de calcul
            au sein de la page web.
          </p>
          <h5>Hébergement</h5>
          <p>
            Pour l’hébergement de nos ressources, notre démarche est de
            favoriser les acteurs visant à améliorer l’efficacité des
            installations et leur longévité.
          </p>
          <p>
            Les données et l’API SINESE sont hébergés en France par OVHCloud.
            Les engagements d’OVHCloud sont disponibles ici :{" "}
            <a href="https://corporate.ovhcloud.com/fr/sustainability/">
              https://corporate.ovhcloud.com/fr/sustainability/
            </a>
          </p>
          <p>
            Le site web et l’application web sont actuellement hébergés par
            Vercel, pour des raisons de simplicité technique pour le
            déploiement. Vercel gère le Framework de développement web Next.js,
            utilisé au sein dans le cadre de nos travaux.
          </p>
          <p>
            Il est prévu de transférer l’hébergement de ces ressources chez
            OVHCloud au premier trimestre 2024.
          </p>
          <hr></hr>
          <h3 id="accessibilite">Accessibilité</h3>
          <p>
            Une attention est portée pour que notre site web soit accessible à
            tous.Les points concernés sont les suivants :
          </p>

          <ul>
            <li>
              La mise en place de textes alternatifs pour toutes les images qui
              permet aux personnes malvoyantes ou utilisant des lecteurs d'écran
              de comprendre le contenu visuel de notre site ;
            </li>
            <li>
              L’utilisation d’une police adaptée et lisible, afin de garantir
              une expérience de lecture fluide pour tous les utilisateurs, y
              compris ceux qui pourraient rencontrer des difficultés de vision ;
            </li>
            <li>
              L’application d’un contraste adapté pour optimiser la lisibilité
              des informations, évitant ainsi toute forme de confusion pour les
              visiteurs ayant une perception visuelle anormale.
            </li>
          </ul>
          <hr></hr>
          <h3  id="licences-proprietes">Licences et propriétés intellectuelles</h3>

          <p>
            Ces aspects concernent à la fois les ressources que nous développons
            et distribuons, et les ressources que nous utilisons dans le cadre
            de nos activités.
          </p>

          <h4>Diffusion de nos travaux sous licence libre (Open Source)</h4>
          <p>
            Notre application web est distribuée sous licence libre CeCILL, afin
            de la rendre accessible et libre d’exploitation pour tous.
          </p>
          <p>
            Le contrat de licence est accessible{" "}
            <a href="http://www.cecill.info/licences/Licence_CeCILL_V2.1-fr.html">
              ici
            </a>
            .
          </p>
          <p>
            Le code est accessible via notre répertoire GitHub :{" "}
            <a href="https://github.com/La-Societe-Nouvelle/">
              La Société Nouvelle sur GitHub
            </a>
            .
          </p>

          <h4>Respect des droits et propriétés intellectuelles</h4>
          <p>
            Les librairies utilisées au sein de notre application web sont
            également des librairies sous licence libre (principalement licence
            MIT).
          </p>
          <p>
            Concernant les illustrations du site ou de nos publications
            (rapports, notes, visuels de communication, etc.) : elles sont
            réalisées par nos soins ou proviennent d’une banque d’illustrations
            libre de droit.
          </p>
          <hr></hr>
          <h3>Données</h3>
          <p>
            Au-delà des traitements, le coeur de nos travaux se portent sur la
            donnée.
          </p>

          <h4>
            Protection des données lors de l’utilisation de l’Application web
          </h4>
          <p>
            Aucune donnée téléversée n’est collectée lors de l’utilisation de
            l’Application web : le traitement des données s’effectue en local,
            au sein du navigateur web utilisé. Les données restent ainsi “côté
            client” (sur l’ordinateur de l’utilisateur).
          </p>
          <p>
            Les seuls retours obtenus concernent la progression sur
            l’application et des rapports signalant les potentielles erreurs
            rencontrées.
          </p>
          <p>
            Politique de confidentialité des données de l’Application Web :{" "}
            <a
              href="https://metriz.lasocietenouvelle.org/confidentialite-des-donnees"
              target="blank"
            >
              Confidentialité des données
            </a>
            .
          </p>

          <h4>Base de données ouverte</h4>
          <p>
            Notre base de données est ouverte. Cela concerne les données
            publiées relatives aux entreprises ainsi que les données issues de
            nos travaux statistiques dès que les conditions le permettent.
          </p>
          <p>
            Les données sont diffusées sous licence Etalab. Elles sont
            accessibles via notre site internet, notre API publique.
          </p>
          <p>
            Licence Etalab :{" "}
            <a
              href="https://www.etalab.gouv.fr/licence-ouverte-open-licence"
              target="blank"
            >
              Licence Ouverte
            </a>
            .
          </p>
          <p>Liens d’accès aux données :</p>
          <ul>
            <li>
              <a href="https://lasocietenouvelle.org/portail" target="blank">
                Portail de données
              </a>
            </li>
            <li>
              <a href="https://api.lasocietenouvelle.org/" target="blank">
                API publique
              </a>
            </li>
          </ul>

          <p>
            Pour les jeux de données statistiques, la méthodologie utilisée est
            également rendue publique et les scripts de production des données
            sont distribués sous licence libre CeCILL. Un package CRAN est
            également disponible pour faciliter les retraitements statistiques
            par des acteurs externes.
          </p>
          <p>
            <a
              href="https://cran.r-project.org/web/packages/lsnstat/index.html"
              target="blank"
            >
              Package CRAN
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
};

export default EngagementPage;
