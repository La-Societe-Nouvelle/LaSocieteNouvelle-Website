
// React
import React from 'react'

import Head from 'next/head'
import Header from '../../src/components/header'
import Footer from '../../src/components/footer'

import fs from 'fs'
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

import indicData from '../../lib/metaData.json'

export async function getStaticPaths() 
{
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

  return {paths, fallback: false}
}

export async function getStaticProps({params}) 
{
  const mdFile = await unified()
    .use(markdown)
    .use(html)
    .process(fs.readFileSync('./public/indic-data/'+params.indicateur.toUpperCase()+'.md'));
  
  const props = {
    indic: params.indicateur,
    data: indicData,
    content: String(mdFile).replace(/href/g,'target="_blank" href')
  }
  
  return props;
}

export default function Home(props) 
{
  const {indic,data,content} = props;

  return (
    <div className="container">

      <Head>
        <title>La Société Nouvelle</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>

      <main className="main">
        <br/>
        <div id="strip-header" className="strip">
          <br/>
          <h2 className="indic-strip-title" id="indic-label">
          {data[indic].libelle}
          </h2>
          <br/>
        </div>        

        <div className="content-strip" dangerouslySetInnerHTML={{__html: content}}/>

        <div className="strip">
          <p id="lien-github"><a href={"https://github.com/SylvainH-LSN/LaSocieteNouvelle-Website/blob/main/public/indic-data/"+indic.toUpperCase()+".md"} target="_blanck">Proposer une amélioration de la page</a></p>
        </div>
      </main>

      <Footer/>

    </div>
  )
}
