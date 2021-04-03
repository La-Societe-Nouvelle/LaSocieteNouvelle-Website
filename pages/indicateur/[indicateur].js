import Head from 'next/Head'
import Header from '../../pages/header.js'
import styles from '../../styles/Home.module.css'

var React = require('react');

import * as indic_data from '../../public/indic-data/indic_data.js'

export default function Post({postData}) {
  return (
    <div>
      {build(postData)}
    </div>
  )
}

export async function getStaticPaths() {
  const paths = [
    {params:{indicateur: "eco"}},
    {params:{indicateur: "art"}},
    {params:{indicateur: "soc"}},
    {params:{indicateur: "knw"}},
    {params:{indicateur: "dis"}},
    {params:{indicateur: "geq"}},
    {params:{indicateur: "ghg"}},
    {params:{indicateur: "mat"}},
    {params:{indicateur: "was"}},
    {params:{indicateur: "nrg"}},
    {params:{indicateur: "wat"}},
    {params:{indicateur: "haz"}}
  ];
  return {
    paths,
    fallback:false
  }
}

export async function getStaticProps({params}) {
  const postData = getIndicData(params.indicateur);
  return {
    props: {postData}
  }
}
export function getIndicData(indic) {
  if (indic==="eco") {
    return indic_data.eco_data;
  } else {
    return indic_data.eco_data;
  }
}

function build(indic) {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Société Nouvelle</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>

      <main className={styles.main}>

        <div id="strip-odd" class="strip">
          <img id="logo-odd" src={indic.odd_img} alt="logo" />
        </div>

        <div class="strip">
          <h2 class="indic-strip-title" id="indic-label">
          {indic.libelle}
          </h2>
          <ul>
            <li>Code : {indic.code}</li>
            <li>Description : {indic.description}</li>
            <li>Unité par défaut : {indic.unit}</li>
          </ul>
          <p>
            Notes
          </p>
        </div>

        <div className="strip">
          <h3 class="indic-strip-title">
          IMPACT DIRECT
          </h3>
          <p>
          Grandeur mesurée : {indic.impactDirect.mesure}
          </p>
          <p>
          {indic.impactDirect.texte}
          </p>
          <p>
          Notes
          </p>
        </div>

        <div className="strip">
          <h3 class="indic-strip-title">
          DONNEES PAR DEFAUT
          </h3>
          {buildParagraph(indic.donneesParDefaut.texts)}
          {buildSources(indic.donneesParDefaut.sources)}
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

function buildParagraph(texts) {
  return texts.map((text) => <p>{text}</p>);
}
function buildLinks(links) {
  return links.map((link) => <li><a href={link.ref} target="_blank">{link.title}</a></li>);
}
function buildSources(sources) {
  return sources.map((source) => <div><p>{source.title}</p><ul>{buildLinks(source.links)}</ul></div>);
}

