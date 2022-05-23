
// React
import React from 'react'


import fs from 'fs'
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

import indicData from '../../lib/metaData.json'
import { Helmet } from 'react-helmet'
import { Container } from 'react-bootstrap'
import PageHeader from '../../components/PageHeader'

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
  
  return props;
}

function build(postData) {
  const { indic, data, content } = postData;
  return (
    <>
      <Helmet>
        <title>La société Nouvelle | {data[indic].libelle} </title>
      </Helmet>
      <PageHeader
        title={data[indic].libelle}
        prev={"notre-approche"}
        prevTitle={"Méthodologie"}
        path={"indicateur/?siren=" + data[indic].libelle}
      />
        <Container>
          <section>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </section>
        </Container>
    </>

  )
}
