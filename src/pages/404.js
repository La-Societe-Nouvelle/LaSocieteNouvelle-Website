// 404.js
import Link from "next/link";
import { Button, Container } from "react-bootstrap";

export default function FourOhFour() {
  return (
    <>
      <Container>
        <section className="text-center">
           <h3>404 - Page non trouvée</h3>

           <Button variant="secondary" href="/">
                Retour à l'accueil
           </Button>
        </section>
      </Container>
    </>
  );
}
