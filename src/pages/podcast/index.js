import Head from 'next/head'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import PageHeader from '../../components/PageHeader'

const episodes = [
  {
    spotifyEmbed: "https://open.spotify.com/embed/episode/6oZoTFfPTjuMkR1bE9iHHZ?utm_source=generator",
    youtubeUrl: "https://youtu.be/2MUlFtfOxHI?si=Q9gnaNrbrV0ahO1g",
  }
]

export default function Podcast() {
  return (
    <>
      <Head>
        <title>La Société Nouvelle - Podcast Horizon 2050 </title>
        <meta name="description" content="Écoutez Horizon 2050, le podcast sur les enjeux de demain." />
      </Head>
      <PageHeader title={"Podcast"} />

      <Container >

        {/* Header visuel */}
        <section className="podcast-header d-flex align-items-center">
          <Row className="align-items-center">
            <Col sm={3}>
              <Image
                fluid
                src="/images/horizon-2050-podcast.png"
                alt="Horizon 2050"
                className="img-fluid rounded podcast-header-image"
              />
            </Col>
            <Col sm={8}>
              <h3 className='h2'>Horizon 2050</h3>
              <p>
                Horizon 2050 est un podcast dédié à celles et ceux qui pensent, construisent et questionnent le monde de demain. Chaque épisode est une rencontre avec des acteurs engagés.
              </p>
              <p>
                <strong>Notre fil rouge :</strong> un chiffre clé, un chiffre qui interpelle, qui questionne, qui ouvre la voie à un échange sur les grands défis économiques, sociaux et environnementaux.
              </p>
            </Col>
          </Row>
        </section>

        {/* Liste des épisodes */}
        <section className=' mb-4 '>
          <h4>Episodes</h4>
          {episodes.map((ep, idx) => (
            <div className=" podcast-episode" key={idx}>

              <iframe
                src={ep.spotifyEmbed}
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="podcast-player"
              ></iframe>

              <a
                href={ep.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-3"
              >
                Voir sur YouTube
              </a>
            </div>
          ))}
        </section>

      </Container>
    </>
  )
}
