import Head from 'next/Head'
import Header from './header.js'
import Footer from './footer.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Société Nouvelle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles.main}>

        <h1>
        Services disponibles
        </h1>

        <div id="services-strip">
          <ul id="services">   
            <li class="services-item">
              <h3>Accès aux données</h3>
              <p>Les données sont accessibles librement via le portail web ou via notre API, pour une intégration directe au sein de votre ERP ou de votre logiciel comptable.</p>
            </li>           
            <li class="services-item">
              <h3>Mesure des indicateurs</h3>
              <p>L'ensemble des documentations et des supports sont mis à disposition librement.</p>              
            </li>    
            <li class="services-item">
              <h3>Publication des indicateurs</h3>
              <p>Contactez-nous pour mettre vos données à jour ou pour toute modification. Un espace de déclaration est cours de construction.</p>
            </li>        
          </ul>
        </div>
        
        <div id="remaining-space"></div>

      </main>

      <Footer/>

    </div>
  )
}
