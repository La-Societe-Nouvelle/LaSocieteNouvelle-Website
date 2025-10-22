"use client";

import { Container } from "react-bootstrap";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import services from "../../lib/services.json";
import Image from "next/image";

const serviceIcons = {
  "Analyse extra-financière": "clipboard-data",
  "Étude prospective": "graph-up-arrow",
  "Développement informatique": "code-slash"
};

export default function ServicesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center'
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="section services-carousel-section">
      <Container>
        <div className="section-header text-center mb-4 mb-md-5">
          <h2 className="section__title section__title--center">Nos services d'accompagnement</h2>
          <p className="section-subtitle">
            Des solutions sur-mesure pour répondre à vos besoins spécifiques
          </p>
        </div>

        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {services.map((service, index) => (
                <div className="embla__slide" key={index}>
                  <div className={`service-slide ${index % 2 === 0 ? 'service-slide-left' : 'service-slide-right'}`}>
                    <div className="service-slide-content">
                      <div className="service-icon">
                        <i className={`bi bi-${serviceIcons[service.title]}`}></i>
                      </div>
                      <h3 className="service-slide-title">{service.title}</h3>
                      <p className="service-slide-audience">{service.audience}</p>
                      <p className="service-slide-description">{service.description}</p>
                      <Link href="/nos-services" className="service-slide-link">
                        En savoir plus
                        <i className="bi bi-arrow-right ms-2"></i>
                      </Link>
                    </div>
                    <div className="service-slide-visual">
                      <Image
                        src={service.image}
                        alt={service.title}
                        className="img-fluid"
                        width={600}
                        height={300}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 600px"
                      />
                    </div>
                  </div>
                  <div className="service-slide-background">
                    <div className={`background-shape ${index % 2 === 0 ? 'shape-left' : 'shape-right'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="embla__prev" onClick={scrollPrev} aria-label="Service précédent">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="embla__next" onClick={scrollNext} aria-label="Service suivant">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </Container>
    </section>
  );
}
