'use client';

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav, Accordion } from "react-bootstrap";

import PageHeader from "@/components/PageHeader";
import { faqCategories } from "./faqData";

export default function Faq() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -66%',
      }
    );

    // Observer toutes les catégories
    faqCategories.forEach((category) => {
      const element = document.getElementById(category.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []); // Pas besoin de faqCategories car c'est une constante en dehors du composant

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <PageHeader
        title="Foire aux questions"
        subtitle="Tout ce que vous devez savoir sur le projet de La Société Nouvelle."
        icon="question-circle"
      />

      {/* Section Introduction */}
      <section className="pt-5" >
        <Container>
          <Row>
            <Col lg={10}>
              <div className="section__content">
                <p>
                  Si vous avez des questions sur nos missions ou nos services, notre
                  FAQ peut vous aider. Nous avons recensé les questions les plus
                  fréquentes et leurs réponses pour vous offrir une assistance rapide.
                </p>
                <p>
                  Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à
                  nous contacter en utilisant{" "}
                  <a href="/contact" title="Contact">
                    le formulaire de contact
                  </a>.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section FAQ avec sidebar */}
      <section className="section pt-2">
        <Container>
          <Row>
            {/* Sidebar */}
            <Col lg={3} className="d-none d-lg-block">
              <div className="faq-sidebar">
                <div className="faq-sidebar-sticky">
                  <div className="faq-sidebar-title">CATÉGORIES</div>
                  <Nav className="flex-column faq-sidebar-nav">
                    {faqCategories.map((category) => (
                      <Nav.Link
                        key={category.id}
                        onClick={() => scrollToSection(category.id)}
                        className={`faq-sidebar-link ${
                          activeSection === category.id ? 'active' : ''
                        }`}
                      >
                        {category.title}
                      </Nav.Link>
                    ))}
                  </Nav>
                </div>
              </div>
            </Col>

            {/* Contenu FAQ */}
            <Col lg={9}>
              {faqCategories.map((category) => (
                <div key={category.id} id={category.id} className="faq-category">
                  <h2 className="faq-category-title">{category.title}</h2>
                  <Accordion flush>
                    {category.questions.map((item, index) => (
                      <Accordion.Item
                        key={`${category.id}-${index}`}
                        eventKey={`${category.id}-${index}`}
                        className="faq-accordion-item"
                      >
                        <Accordion.Header className="faq-accordion-header">
                          {item.question}
                        </Accordion.Header>
                        <Accordion.Body className="faq-accordion-body">
                          {item.answer}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
