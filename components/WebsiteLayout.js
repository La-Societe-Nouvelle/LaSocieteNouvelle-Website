'use client';

import { usePathname } from 'next/navigation';
import Header from './header';
import Footer from './footer';

export default function WebsiteLayout({ children }) {
  const pathname = usePathname();

  // Si on est sur databrowser, ne pas afficher le Header/Footer classiques
  // Le databrowser a son propre layout
  if (pathname?.startsWith('/databrowser') || pathname?.startsWith('/docs') || pathname?.startsWith('/qr') || pathname?.startsWith('/formulaire-partenariat') ) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
