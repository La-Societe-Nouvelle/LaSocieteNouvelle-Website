import Link from "next/link";
import { Container } from "react-bootstrap";

export default function PartnershipBanner() {
  return (
    <div className="partnership-banner">
      <Container>
        <div className="partnership-banner-content">
          <i className="bi bi-megaphone-fill me-3"></i>
          <span className="partnership-banner-text">
            <b>Appel à partenariat 2026 </b> — Soutenez nos travaux pour l'année 2026 !
          </span>
          <Link href="/appel-partenariat" className="partnership-banner-link">
            En savoir plus
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </Container>
    </div>
  );
}
