import Link from 'next/link';
import { Container } from 'react-bootstrap';

export const metadata = {
  title: '404 - Page non trouvée | La Société Nouvelle',
};

export default function NotFound() {
  return (
    <Container className="text-center my-5 py-5">
      <h1 className="display-1">404</h1>
      <h2>Page non trouvée</h2>
      <p className="lead my-4">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <Link href="/" className="btn btn-primary">
        Retour à l'accueil
      </Link>
    </Container>
  );
}