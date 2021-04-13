import Head from 'next/head'
import Header from './header.js'
import Footer from './footer.js'

import styles from '../styles/Home.module.scss'

import fs from 'fs'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'

var React = require('react');

export async function getStaticProps() {
  const mdFile = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(html)
    .process(fs.readFileSync('./public/modele.md'));
  const data = {
      content: String(mdFile).replace(/href/g,'target="_blank" href')}
  return {
    props: {data}
  }
}

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Société Nouvelle</title>
        <link rel="icon" href="/resources/logo_miniature.jpg" />
      </Head>

      <Header/>
      <main className={styles.main}>

        <div className="content-md" dangerouslySetInnerHTML={{__html: data.content}}/>

        <div className="strip">
          <p id="lien-github"><a href={"https://github.com/SylvainH-LSN/LaSocieteNouvelle-Website/blob/main/public/modele.md"} target="_blanck">Proposer une amélioration de la page</a></p>
        </div>

      </main>
      <Footer/>
    </div>
  )
}
