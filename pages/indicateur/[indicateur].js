import Head from 'next/head'
import Header from '../../src/components/header'
import Footer from '../../src/components/footer'

import fs from 'fs'
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

var React = require('react');

import indicData from '../../lib/metaData.json'
import { Helmet } from 'react-helmet'
import { Container } from 'react-bootstrap'

export default function Post({ postData }) {
  return (
    <div>
      {build(postData)}
    </div>
  )
}

export async function getStaticPaths() {
  const paths = [
    { params: { indicateur: "eco" } },
    { params: { indicateur: "art" } },
    { params: { indicateur: "soc" } },
    { params: { indicateur: "knw" } },
    { params: { indicateur: "dis" } },
    { params: { indicateur: "geq" } },
    { params: { indicateur: "ghg" } },
    { params: { indicateur: "mat" } },
    { params: { indicateur: "was" } },
    { params: { indicateur: "nrg" } },
    { params: { indicateur: "wat" } },
    { params: { indicateur: "haz" } }
  ];
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const mdFile = await unified()
    .use(markdown)
    .use(html)
    .process(fs.readFileSync('./public/indic-data/' + params.indicateur.toUpperCase() + '.md'));
  const postData = {
    indic: params.indicateur,
    data: indicData,
    content: String(mdFile).replace(/href/g, 'target="_blank" href')
  }
  return {
    props: { postData }
  }
}

function build(postData) {
  const { indic, data, content } = postData;
  return (
    <>
      <Helmet>
        <title>La société Nouvelle | {data[indic].libelle} </title>
      </Helmet>
      <Header />

      <main >
        <Container>
          <section>

            <h2 className="indic-strip-title" id="indic-label">
              {data[indic].libelle}
            </h2>

            <div  dangerouslySetInnerHTML={{ __html: content }} />

              <p id="lien-github"><a href={"https://github.com/SylvainH-LSN/LaSocieteNouvelle-Website/blob/main/public/indic-data/" + indic.toUpperCase() + ".md"} target="_blanck">Proposer une amélioration de la page</a></p>
          </section>

        </Container>

      </main>

      <Footer />
    </>

  )
}
