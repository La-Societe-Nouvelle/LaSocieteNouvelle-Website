import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { MetrizButton } from '../components/buttons/MetrizButton';

function MeasureAndPublishPage() {
  return (
    <>
      <Helmet>
        <title>
          Mesurez ou publiez l'empreinte de votre entreprise | La Société
          Nouvelle
        </title>
      </Helmet>

      <section>
        <Container>
          <Row>
            <Col>
              <div className="box border border-2">
                <h2 className="text-center">Mesurer mon empreinte</h2>
                <Image src="/images/mesurer-empreinte.svg" alt="Illustration" fluid  className='my-4'/>
                <p>
                  Vous ne connaissez pas encore votre empreinte sociétale et
                  vous souhaitez calculer les impacts de votre entreprise ?
                </p>
                <p>
                  Un outil gratuit et open source vous permet de faire ce calcul
                  grâce à votre fichier d'écriture comptable.
                </p>
                <div className="text-center  mt-4">
                  <MetrizButton />
                  <Button href="ressources/application-mesure-impact" className='ms-2'>
                    En savoir plus
                  </Button>

                </div>
              </div>
            </Col>
            <Col>
            <div className="box border border-2">
                <h2 className="text-center">Publier mon empreinte</h2>
                <Image src="/images/publier-empreinte.svg" alt="Illustration" fluid className='my-4'/>

                <p>
                  
                  Vous avez déjà évalué l'empreinte sociétale de votre entreprise et vous
                  souhaitez partagez les résultats sur notre portail ?
                </p>
                <p>
                Vous pouvez envoyer votre demande de publication en utilisant notre formulaire en ligne.</p>
                <div className="text-center mt-4">
                  <Button variant="secondary" href="/publier-mon-empreinte">Publier mon empreinte</Button>
                  <Button href="/portail" className='ms-2'>Accéder au portail</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default MeasureAndPublishPage;
