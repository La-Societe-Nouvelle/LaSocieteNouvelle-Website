import PageHeader from "@/components/PageHeader";
import { Container } from "react-bootstrap";

export const metadata = {
  title: "Politique de confidentialité | La Société Nouvelle",
  description: "Politique de confidentialité du site La Société Nouvelle",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="legal-page">
      <PageHeader
        title={"Politique de confidentialité"}
        icon="bi bi-shield-lock"
      />

      <section className="section">
        <Container>
          <div className="legal-card">
              <section >
              <h3>Préambule</h3>
              <p>
                Cette politique de confidentialité s'applique au site{" "}
                <a href="https://lasocietenouvelle.org">lasocietenouvelle.org</a>.
              </p>
              <p>
                Cette politique de confidentialité explique comment les données
                personnelles sont collectées, utilisées et protégées lorsque vous
                utilisez notre formulaire de contact ou lorsque vous publiez
                l'empreinte sociétale d'une entreprise sur notre site Internet,
                conformément au Règlement général sur la protection des données
                (RGPD).
              </p>
            </section>

            <section >
                <h4>Collecte des données personnelles</h4>
              <p>
                Lorsque vous utilisez notre formulaire de contact, les données
                personnelles suivantes peuvent être collectées :
              </p>
              <ul className="legal-list">
                <li>Votre nom et prénom</li>
                <li>Votre adresse e-mail</li>
                <li>Le sujet de votre demande</li>
                <li>Le contenu de votre message</li>
              </ul>
            </section>

            <section >
              <h4>Utilisation des données personnelles</h4>
              <p>
                Les données personnelles collectées via le formulaire de contact
                sont utilisées uniquement pour répondre à votre demande.
              </p>
              <p>
                Nous ne divulguons aucunes données personnelles à des tiers sans
                votre consentement.
              </p>
            </section>

            <section>
              <h4>Durée de conservation des données personnelles</h4>
              <p>
                Nous conservons vos données personnelles aussi longtemps que
                nécessaire pour répondre à votre demande ou pour fournir le service
                demandé, et nous les supprimons en toute sécurité lorsque nous
                n'avons plus besoin de les conserver.
              </p>
            </section>

            <section>
              <h4>Sécurité des données personnelles</h4>
              <p>
                Nous nous engageons à mettre en œuvre toutes les mesures de
                sécurité nécessaires pour protéger vos données personnelles contre
                la perte, l'utilisation abusive, l'accès non autorisé, la
                divulgation ou la modification.
              </p>
            </section>

            <section>
              <h4>Droits des personnes concernées</h4>
              <p>
                Conformément à la Loi Informatique et Libertés du 6 janvier 1978,
                vous disposez d'un droit d'accès, de rectification, d'opposition et
                de limitation, de vos données personnelles.
              </p>
              <p>
                Si vous souhaitez exercer ces droits ou si vous avez des questions
                ou des préoccupations concernant la collecte, le traitement ou la
                protection de vos données personnelles, vous pouvez nous contacter à
                l'adresse suivante :{" "}
                <a href="mailto:support@lasocietenouvelle.org">support@lasocietenouvelle.org</a>
              </p>
            </section>
          </div>
        </Container>
      </section>
    </div>
  );
}