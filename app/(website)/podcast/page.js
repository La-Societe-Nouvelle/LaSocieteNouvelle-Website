'use client';

import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

const episodes = [
  {
    spotifyEmbed: "https://open.spotify.com/embed/episode/7cqHbIYoGTjnG3NbMEPcBl?utm_source=generator",
  },
  {
    spotifyEmbed: "https://open.spotify.com/embed/episode/1vRTQxAo8sa7dfW6BrMOO2?utm_source=generator",
  },
  {
    spotifyEmbed: "https://open.spotify.com/embed/episode/6oZoTFfPTjuMkR1bE9iHHZ?utm_source=generator",
    youtubeUrl: "https://youtu.be/2MUlFtfOxHI?si=Q9gnaNrbrV0ahO1g",
  },
];

export default function Podcast() {
  return (
    <div className="podcast-page">
      <PageHeader
        title={"Podcast Horizon 2050"}
        subtitle={"Rencontrez celles et ceux qui pensent, construisent et questionnent le monde de demain"}
        icon="bi bi-mic"
      />
      {/* Hero Section */}
      <section className="section section--primary">
        <Container>
          <Row className="align-items-center">
            <Col lg={3} md={4} className="text-center mb-4 mb-md-0">
              <div className="section__logo-wrapper">
                <Image
                  src="/images/horizon-2050-podcast.png"
                  alt="Horizon 2050"
                  width={300}
                  height={300}
                  className="section__logo"
                  priority
                />
              </div>
            </Col>
            <Col lg={9} md={8}>
              <div className="section__content">
                <h3 className="section-title">Horizon 2050</h3>
                <p>
                  Horizon 2050 est un podcast dédié à celles et ceux qui pensent, construisent et questionnent le monde de demain. Chaque épisode est une rencontre avec des acteurs engagés.
                </p>
                <p>
                  <strong>Notre fil rouge :</strong> un chiffre clé, un chiffre qui interpelle, qui questionne, qui ouvre la voie à un échange sur les grands défis économiques, sociaux et environnementaux.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Episodes Section */}
      <section className="section pt-0">
        <Container>
          <h3 className="section__title section__title--center">Épisodes</h3>
          <div className="episodes-list">
            {episodes.map((ep, idx) => (
              <div className="episode-card" key={idx}>
                <iframe
                  src={ep.spotifyEmbed}
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="spotify-player"
                  title={`Épisode ${idx + 1}`}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="highlight-section mb-5">
        <Container>
          <div className="highlight-section__content">
            <h2 className="highlight-section__title">
              <i className="bi bi-headphones me-2"></i>
              Retrouvez tous nos épisodes
            </h2>
            <p className="highlight-section__text">
              Écoutez Horizon 2050 sur YouTube ou Spotify pour ne manquer aucun épisode et rester informé des dernières discussions sur l'avenir de notre société.
            </p>
            <div className="highlight-section__links">
              <a
                href="https://www.youtube.com/@lasocietenouvelle6096"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="bi bi-youtube me-2"></i>
                YouTube
              </a>
              <a
                href="https://open.spotify.com/show/5upKspY3bYhFXmxQ8OSmWB"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                <i className="bi bi-spotify me-2"></i>
                Spotify
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}