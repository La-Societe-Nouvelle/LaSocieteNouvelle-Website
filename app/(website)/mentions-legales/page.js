import PageHeader from '@/components/PageHeader';
import { Container } from 'react-bootstrap';

export const metadata = {
  title: "Mentions légales | La Société Nouvelle",
  description: "Mentions légales du site La Société Nouvelle",
};

export default function MentionsLegales() {
  return (
    <div className="legal-page">
      <PageHeader
        title={"Mentions légales"}
        icon="bi bi-file-text"
      />
      <section className="section">
        <Container>
          <div className="legal-card ">
            <h3>La Société Nouvelle</h3>
            <ul className="legal-list">
              <li>SAS au capital de 1 000 €</li>
              <li>Siège social : 165 avenue de Bretagne 59000 LILLE</li>
              <li>SIREN : 889 182 770</li>
              <li>Responsable : Sylvain HUMILIERE</li>
              <li>
                Contact : <a href="mailto:contact@lasocietenouvelle.org">contact@lasocietenouvelle.org</a>
              </li>
            </ul>

            <h3>Hébergement</h3>
            <p className="hosting-name">UPSUN</p>
            <address className="hosting-address">
              Upsun (Platform.sh)<br />
              Hébergé sur OVH France<br />
            </address>
            <p>
              <a href="https://upsun.com" target="_blank" rel="noopener noreferrer">https://upsun.com</a>
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}