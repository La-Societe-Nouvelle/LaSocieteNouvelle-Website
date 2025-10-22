import WebsiteLayout from '../components/WebsiteLayout';
import '../styles/globals.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'katex/dist/katex.min.css'
export const metadata = {
  metadataBase: new URL('https://lasocietenouvelle.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://lasocietenouvelle.org',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      }
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <WebsiteLayout>
          {children}
        </WebsiteLayout>
      </body>
    </html>
  );
}