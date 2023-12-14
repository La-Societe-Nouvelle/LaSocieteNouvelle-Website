import { Button, Col, Image, Row } from 'react-bootstrap'

const BoxNewsletter = () => {
  return (
    <Row className="bg-light rounded align-items-center">
      <Col sm={3}>
        <Image fluid src="illustrations/newsletter.svg" alt="Illustration pour l'inscription à une newsletter"></Image>
      </Col>
      <Col>
        <div>
          <h4 className="h2">Ne manquez plus aucune nouveauté ! </h4>
          <p>
            En vous abonnant à notre newsletter, vous serez informé en
            avant-première des dernières parutions de nos notes d'analyse, des
            nouveaux jeux de données disponibles et des mises à jour de notre
            application !
          </p>

          <div className="d-flex justify-content-sm-start justify-content-center">
            <Button
              href="https://a2dec458.sibforms.com/serve/MUIEAE87cWMEBduAwTKh6kNCKZRFF4iVG4F1d0WT5TuD4LYdWSn_LdL8FHgC0SuDGKSKe7PVrx-vcOQn8KwHR6JmimxBzdH7seeIYDD_5K31DYP3Y-qGV8gcbVSHehd2qWU8j90PIYaydyKOEGO6S_ijEsBCiialfd2BEvM6AB8_FZXMOJgtsFu6sOOtOd7zLqnu4tEIEE8HEHTc"
              target="_blank"
              title="S'inscrire à la newsletter"
            >
              Je m'inscris
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default BoxNewsletter
