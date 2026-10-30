export const METRIZ_URL = 'metriz.lasocietenouvelle.org';

/**
 * Fenêtre de navigateur autour d'une capture de l'application Metriz
 * (des <span> pour rester valide dans le <p> généré par une image markdown)
 */
export default function BrowserFrame({ children }) {
  return (
    <span className="docs-browser">
      <span className="docs-browser-bar" aria-hidden="true">
        <span className="docs-browser-dots"><i></i><i></i><i></i></span>
        <span className="docs-browser-url">{METRIZ_URL}</span>
      </span>
      {children}
    </span>
  );
}
