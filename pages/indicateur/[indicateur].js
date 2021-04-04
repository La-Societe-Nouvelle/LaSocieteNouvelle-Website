import Head from 'next/Head'
import Header from '../../pages/header.js'
import Footer from '../../pages/footer.js'

import styles from '../../styles/Home.module.css'

import fs from 'fs'
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

var React = require('react');

import * as data from '../../public/indic-data/data.js'
import ReactMarkdown from 'react-markdown'

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
  const mdFile = await unified()
    .use(markdown)
    .use(html)
    .process(fs.readFileSync('./public/indic-data/'+params.indicateur.toUpperCase()+'.md'));
  const postData = {
      indic: params.indicateur,
      data: data.indicateurs,
      content: String(mdFile)}
  return {
    props: {postData}
  }
}

function build(postData) {
  const {indic,data,content} = postData;
  return (
    <div className={styles.container}>
      <Head>
        <title>La Société Nouvelle</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>
      <main className={styles.main}>

        <div id="strip-odd" class="strip">
          <img id="logo-odd" src={data.odd_img[indic]} alt="logo" />
        </div>

        <div className="strip">
          <h2 className="indic-strip-title" id="indic-label">
          {data.libelle[indic]}
          </h2>
          <ul>
            <li>Code : {data.code[indic]}</li>
            <li>Description : {data.description[indic]}</li>
            <li>Unité par défaut : {data.unit[indic]}</li>
          </ul>
          <p>
            {data.note[indic]}
          </p>
        </div>

        <div className="content-strip" dangerouslySetInnerHTML={{__html: content}}/>
        
      </main>
      <Footer/>
    </div>
  )
}
