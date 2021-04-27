import Head from 'next/head'
import Header from '../pages/header.js'
import Footer from '../pages/footer.js'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>La Société Nouvelle | A propos</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>

      <main className="main">

        <h1>
          A propos - La Société Nouvelle
        </h1>

        <div className="strip">
          <h2>
          Mission
          </h2>
          <p>
          La Société Nouvelle est une structure indépendante créée à Lille en août 2020 dont la mission est de déployer un système d'information sur les impacts sociaux et environnementaux des entreprises.
          </p>
          <p>
          Notre objectif est de fournir, de manière ouverte, les informations nécessaires pour connaître et mesurer l'empreinte de la production des entreprises sur des enjeux majeurs de développement durable. Elle s'inscrit également dans la volonté de faire évoluer le modèle de gestion des entreprises en intégrant aux éléments comptables une information sur leurs externalités.
          </p>
          <p>
          Les documents, outils et autres éléments développés par La Société Nouvelle sont open source et réutilisables librement.
          </p>
        </div>

        <div className="strip">
          <h2>
          Activités
          </h2>
          <p>
          Nos activités s'organisent autour de trois axes :
          </p>
          <ul>
            <li>
              <h3>
              Gouvernance des Indicateurs
              </h3>
              <p>
              Nous travaillons en continu sur les indicateurs de l'Empreinte Sociétale : choix méthodologiques, données utilisées, outils supports, suivi à l'échelle macroéconomique, définition des objectifs, etc. La gouvernance a vocation à être externalisée et partagée avec des organismes publics et privés.
              </p>
            </li>
            <li>
              <h3>
              Administration et enrichissement de la base de données
              </h3>
              <p>
              Nous centralisons les données relatives aux indicateurs au sein d'une base de données ouverte accessible via le portail web ou une API pour faciliter l'exploitation des données. Les données sont fournies par les entreprises, obtenues à partir de publication ou correspondent à des données par défaut issus de travaux statistiques. Nous travaillons à enrichir le plus possible la base de données.
              </p>
            </li>
            <li>
              <h3>
              Supports de comptabilité &amp; Service d'audit
              </h3>
              <p>
              Nous mettons à disposition des documentations et développons des outils libres pour la mesure des indicateurs. En complément, nous proposons un service de diagnostic pour la mesure des indicateurs.
              </p>
            </li>
          </ul>
        </div>

        <div className="strip">
          <h2>
          Modèle
          </h2>
          <p>
          La pérennité et le développement du système d'information reposent sur une participation libre lors de la publications des données.
          </p>
          <p>
          Les revenus financent l'hébergement et la maintenance des supports techniques, l'amélioration des données disponibles et des ressoures mises à disposition, ainsi que la promotion du modèle et des indicateurs.
          </p>
        </div>

        <div className="strip">
          <h2>
          Gouvernance
          </h2>
          <p>
          La gouvernance de la société est assurée par Sylvain HUMILIERE.
          </p>
        </div>

        <div className="strip">
          <h2>
          Démarche
          </h2>
          <p>
          Nous promouvons un modèle d'indicateurs basé sur la notion de qualité de la valeur économique et sur la traçabilité des flux économiques. Ce modèle est à l'origine d'un panel normalisé d'indicateurs associé au chiffre d'affaires des entreprises : l'Empreinte Sociétale de l'Entreprise (ESE). Les données sont centralisées au sein d'une base de données ouverte et une API est disponible pour faciliter leur exploitation.
          </p>
          <p>
          Nous comptons ainsi contribuer à rendre notre économie compatible avec un développement durable par la transparence.
          </p>
          <p>
          Notre souhaitons permettre à l'ensemble des agents économiques de mesurer et de rendre compte de leurs impacts. Notre objectif est que chaque entreprise française publie annuellement ces indicateurs en fin d'exercice comptable d'ici 2030.
          </p>
        </div>

        <div className="strip">
          <h2>
          Principaux contributeurs
          </h2>
          <div className="contributeurs">
          <div className="contributeur">
            <img src="/resources/photo_sh.jpg" alt="photo_sh"/>
            <div id="contributeur-data">
              <p className="identite" >
                <strong>Sylvain HUMILIERE</strong><br/>
                Président - La Société Nouvelle
              </p>
            </div>
          </div>
          <div className="contributeur">
            <img src="/resources/photo_ld.jpg" alt="photo_sh"/>
            <div id="contributeur-data">
              <p className="identite" >
                <strong>Lyderic DUTILLIEUX</strong><br/>
                Président - Origénial
              </p>
            </div>
          </div>
          </div>
        </div>

        <div id="strip-ecosystem" className="strip">
          <p id="ecosystem-label">Ecosystème - La Société Nouvelle</p>
          <div className="ecosystem-list-logo">
            <img src="/resources/mif-logo.png" alt="logo"/>
            <img src="/resources/r-alliances-logo.png" alt="logo"/>
            <img src="/resources/euratechnologies-logo.jpg" alt="logo"/>
            <img src="/resources/wa4e-logo.png" alt="logo"/>
          </div>
        </div>

      </main>

      <Footer/>

    </div>
  )
}
