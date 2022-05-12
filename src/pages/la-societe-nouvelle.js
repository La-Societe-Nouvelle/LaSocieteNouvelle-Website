import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import PageHeader from '../components/PageHeader'

const About = () => {
  return (
    <>
        <PageHeader title={"La Société Nouvelle"} path={"la-societe-nouvelle"}/>
        <section>
        <Container>
          <Row>
              <Col>
            <h3>Il était une fois la société nouvelle...</h3>
                <p>
                C’est avec la volonté de contribuer à la construction d’une société durable que
                 La Société Nouvelle prit son premier souffle : un nom choisi par l’envie de faire bouger les choses, 
                 pour marquer son engagement au service de cette transition.               
                 </p>
                 <p>
                 L’aventure commence en avril 2020, où Sylvain en dernière année à l’Ecole Centrale de Lille, 
                 initie le projet avec comme conviction que la transition écologique et sociale ne pourra se faire 
                 sans une information fiable et pertinente sur et pour les entreprises. Durant les premiers mois, 
                 l’approche comptable se précise, le premier panel d’indicateurs est constitué, la base de données 
                 ouverte est initialisée et le premier outil de calcul est élaboré.               
                 </p>
                 <p>
                 En septembre, la Société Nouvelle rejoint l’incubateur Euratechnologies 
                 à Lille pour structurer son développement. 
                 Depuis, elle n’a de cesse d’améliorer les ressources qu’elle met à disposition des 
                 entreprises et veille à rendre tous ses travaux publics et accessibles.
                 </p>
                 <p>
                 En février 2022, l’équipe s’agrandit avec l’arrivée de Maëva, Laura et Joris. Désormais, l’objectif est d’accéler le déploiement de la méthode et de la parachever.
                 </p>
              </Col>
              <Col>
                <Image src="images/equipe-la-societe-nouvelle.jpg" alt="Photo d'équipe" fluid  className="mt-5" />
              </Col>
          </Row>
        </Container>
      </section>
      <section className='cta'>
        <Container>
        <h3>Aujourd’hui, qu’est-ce que La Société Nouvelle ?</h3>
          <p>
            C’est une initiative open data et open source dont la mission est de déployer un système d'information et de comptabilité et ainsi permettre aux entreprises de mesurer, sur des dimensions sociales et environnementales clefs, les impacts de la valeur qu’elles produisent.
            </p>
        </Container>
      </section>
      <section>
        <Container>
          <h3> Notre vision</h3>
          <h4> Pourquoi mesurer ce panel d'indicateurs ? </h4>
          
Dans le contexte social et écologique actuel, il est incontournable pour une entreprise de connaître, a minima sur les enjeux clefs, ses impacts.

Au-delà de sa pérennité, il s’agit d’un maillon essentiel pour identifier les entreprises les plus performantes sur les dimensions sociales et environnementales concernées.

Plus globalement, il s’agit de repenser la valeur économique, en associant à sa dimension quantitative (volume monétaire), une approche qualitative et d’apprécier de manière plus juste et plus complète la valeur créée et produite d’une entreprise.

Les enjeux sont conséquents et nous devons construire dès à présent un monde économique ayant à coeur de mesurer ses impacts de production, pour les générations futures.
        </Container>
      </section>
    </>
    )
}

export default About