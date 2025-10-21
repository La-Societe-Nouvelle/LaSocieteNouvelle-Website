import FeatureCard from "./FeatureCard";

const cards = [
  {
    title: "Données statistiques",
    text: "Suivez l'empreinte sociale et environnementale des activités économiques.",
    img: "/illustrations/illustration-statistics.png",
    btn: { href: "/databrowser", label: "Accéder aux données" },
  },
  {
    title: "Notre Solution METRIZ",
    text: "Mesurez l'empreinte sociétale de votre entreprise.",
    img: "/illustrations/illustration-webapp.png",
    btn: { href: "/ressources/application-mesure-impact", label: "Découvrir l'application" },
  },
  {
    title: "Espace partenaire",
    text: "Ressources pour cabinets comptables et partenaires.",
    img: "/illustrations/illustration-partners.png",
    btn: { href: "/devenir-partenaire", label: "Devenir partenaire" },
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-light">
      <div className="container mt-1 px-5">
        <div className="row">
          {cards.map((c, i) => (
            <div className="col d-flex align-self-stretch" key={i}>
              <FeatureCard {...c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
