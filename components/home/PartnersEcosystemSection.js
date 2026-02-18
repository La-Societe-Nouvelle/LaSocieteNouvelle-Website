"use client";

import Image from "next/image";
import { Container } from "react-bootstrap";
import Link from "next/link";
import EmblaCarousel from "../carousel/EmblaCarousel";
import partners from "../../lib/partners.json";
import ecosystem from "../../lib/ecosystem.json";

export default function PartnersEcosystemSection() 
{
  const renderPartnerSlide = (partner) => (
    <Link
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      title={`Accéder au site ${partner.name}`}
      className="logo-card"
    >
      <Image
        src={partner.img}
        alt={`Logo ${partner.name}`}
        width={partner.height * 3}
        height={partner.height}
        className="img-fluid"
        style={{ objectFit: "contain", height: partner.height }}
      />
    </Link>
  );

  const renderEcosystemSlide = (item) => (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      title={`Accéder au site ${item.name}`}
      className="logo-card"
    >
      <Image
        src={item.img}
        alt={`Logo ${item.name}`}
        width={item.height * 3}
        height={item.height}
        className="img-fluid"
        style={{ objectFit: "contain", height: item.height }}
      />
    </a>
  );

  return (
    <section className="section section--secondary partners-ecosystem-section">
      <Container>
        <div className="partners-ecosystem-box">
          <div className="section-header text-center mb-4 mb-md-5">
            <h5 className="section__title section__title--center">Partenaires & Soutiens</h5>
          </div>

          {/* Partenaires */}
          <div className="subsection">
            <h6 className="subsection-title">Nos partenaires et sponsors</h6>
            <EmblaCarousel
              items={partners}
              renderSlide={renderPartnerSlide}
              loop={true}
              autoplay={true}
              delay={3000}
            />
          </div>

          {/* Écosystème */}
          <div className="subsection">
            <h6 className="subsection-title">Notre écosystème</h6>
            <EmblaCarousel
              items={ecosystem}
              renderSlide={renderEcosystemSlide}
              loop={false}
              autoplay={false}
              className="carousel-wrapper-no-controls"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
