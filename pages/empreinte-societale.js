import Head from 'next/Head'
import Header from '../pages/header.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Société Nouvelle | Empreinte Sociétale de l'Entreprise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles.main}>

        <h1>
        Empreinte Sociétale de l'Entreprise
        </h1>

        <div class="strip">
          <h2>
          Introduction
          </h2>
          <p>
          L’Empreinte Sociétale de l’Entreprise (ESE) est un panel d'indicateurs extra-financiers associés au chiffre d'affaires des entreprises.  Il informe sur les externalités sociales et environnementales liées à la production des biens et/ou services vendus par l'entreprise. Les indicateurs prennent en compte les activités propres de l'entreprise (valeur ajoutée nette), mais également les consommations (achats et autres charges externes) et les amortissements sur immobilisations ; avec une dépendance entre les entreprises.
          </p>
          <p>
          Le modèle des indicateurs repose sur l'association des externalités à la valeur créée. Il permet une intégration directe au sein de la comptabilité des entreprises, une traçabilité des impacts sociaux et environnementaux et offre la meilleure solution pour la mise en place d'une comptabilité sociale et environnementale au sein de chaque entreprise. Les données disponibles donnent à chaque entreprise la capacité de mesurer ses impacts, et d'en rendre compte.
          </p>
          <p>
          Ainsi, l’usage de l’ESE est double :
            Elément d’information comparable sur la performance sociale et environnementale d’une entreprise : pour guider nos choix de consommations, intermédiaires ou finaux ;
            Donnée de mesure de l’empreinte sociétale de ses clients : pour mesurer notre impact et mettre en place une traçabilité.
          </p>
          <p>
          Au-delà de l’intelligence produite, la démarche présente un réel potentiel de faire évoluer notre modèle économique à travers la notion de qualité de la valeur économique. Cette dernière permet d’ajouter de nouvelles dimensions – sociales et environnementales – à la valeur économique, et d’apprécier de manière plus juste et plus complète le chiffre d'affaires réalisé par une entreprise. L'ESE offre une réponse efficace aux besoins d’intégration des problématiques sociales et environnementales au cœur des entreprises, et d’information sur les impacts de nos dépenses.
          </p>
          <p>
          L’ambition est d’en faire un outil standardisé, piloté conjointement avec des acteurs publics et privés, afin de mobiliser l’ensemble des entreprises pour l’atteinte d’un développement durable. Les indicateurs proposés sont voués à évoluer, pour maintenir une pertinence avec les enjeux sociaux et environnementaux, l’entreprise et le consommateur final.
          </p>
        </div>

        <div class="strip">
          <h2>
          Indicateurs
          </h2>
          <p>
          Les Indicateurs de Qualité de la Valeur Economique (IQVE) qui composent l’ESE sont en lien direct avec les 17 Objectifs de Développement Durable (ODD). Ils sont construits et sélectionnés pour leur pertinence vis-à-vis du développement durable, de l’entreprise et du consommateur final.
          </p>
          <p>
          Emplois des ressources :
          </p>
          <ul>
            <li><a href="indicateur/eco">Contribution à l'économie nationale</a></li>
            <li><a href="indicateur/art">Contribution aux métiers d'art et aux savoir-faire</a></li>
            <li><a href="indicateur/soc">Contribution aux acteurs d'intérêt social</a></li>
            <li><a href="indicateur/knw">Contribution à l'évolution des compétences et des connaissances</a></li>
          </ul>
          <p>
          Impacts environnementaux :
          </p>
          <ul>
            <li><a href="indicateur/ghg">Intensité d'émission de gaz à effet de serre</a></li>
            <li><a href="indicateur/was">Intensité de production de déchets</a></li>
            <li><a href="indicateur/haz">Intensité d'utilisation de produits dangereux pour la santé et l'environnement</a></li>
          </ul>
          <p>
          Ressources naturelles :
          </p>
          <ul>
            <li><a href="indicateur/mat">Intensité d'extraction de matières premières</a></li>
            <li><a href="indicateur/nrg">Intensité de consommation d'énergie</a></li>
            <li><a href="indicateur/wat">Intensité de consommation d'eau</a></li>
          </ul>
          <p>
          Partage de la valeur :
          </p>
          <ul>
            <li><a href="indicateur/dis">Indice de répartition des rémunérations</a></li>
            <li><a href="indicateur/geq">Indice d'écart de rémunérations femmes/hommes</a></li>
          </ul>
          <p>
          La gouvernance de l’ESE est actuellement assurée par La Société Nouvelle. La volonté reste cependant d’ouvrir cette gouvernance à des acteurs publics et privés afin de créer un outil partagé par l’ensemble des acteurs économiques et favoriser sa diffusion. Cette gouvernance comprend la sélection des indicateurs (méthodologies, valeurs par défaut, etc.) et la surveillance concernant l’administration de la base de données ouverte.
          </p>
        </div>

        <div class="strip">
          <h2>
          Pourquoi mesurer son Empreinte Sociétale ?
          </h2>
          <p>
          Du point de vue de l’entreprise, les intérêts de l’ESE sont multiples :
          </p>
          <ul>
            <li>Se positionner vis-à-vis des enjeux de développement durable ;</li>
            <li>Rendre compte de ses impacts</li>
            <li>Connaître son degré d’exposition et de risque pour la pérennité des activités, pour ajuster sa stratégie ;</li>
            <li>Participation à la transformation de notre modèle économique ;</li>
            <li>Justifier son action pour un développement durable et valoriser les résultats de sa démarche RSE ;</li>
            <li>Fournir une information utile à ses clients pour la mesure de leurs impacts indirects</li>
          </ul>
        </div>

      </main>

      <footer className={styles.footer}>
        <a>
          <p>
            Bas de Page
          </p>
        </a>
      </footer>
      
    </div>
  )
}
