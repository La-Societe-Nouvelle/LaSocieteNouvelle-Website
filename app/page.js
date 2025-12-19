import PartnershipBanner from "../components/home/PartnershipBanner";
import HeroSection from "../components/home/HeroSection";
import IndicsSection from "../components/home/IndicsSection";

import AboutSection from "../components/home/AboutSection";
import OpenSection from "../components/home/OpenSection";
import ServicesSection from "../components/home/ServicesSection";
import NewsSection from "../components/home/NewsSection";
import KeyFigures from "../components/home/KeyFigures";
import PartnersEcosystemSection from "../components/home/PartnersEcosystemSection";
export const metadata = {
  title: "La Société Nouvelle | Informations sur les impacts des entreprises",
  description:
    "Initiative open data et open source qui met en place un système d'information sur les impacts sociaux et environnementaux des entreprises françaises.",
  openGraph: {
    title: "Portail des empreintes sociétales des entreprises françaises",
    url: "https://lasocietenouvelle.org/",
    images: ["/website-screen.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <PartnershipBanner />
      <HeroSection />
      <KeyFigures />
      <IndicsSection />
      <OpenSection />
      <AboutSection />
      <ServicesSection />
      <NewsSection />
      <PartnersEcosystemSection />
    </>
  );
}
