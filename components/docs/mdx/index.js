/**
 * Composants utilisables directement dans les fichiers .mdx de la documentation
 * (enregistrés dans mdx-components.js, aucun import nécessaire)
 */

import Link from 'next/link';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const isExternal = (href) => /^https?:\/\//.test(href || '');

const SmartLink = ({ href, children, ...props }) => isExternal(href)
  ? <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
  : <Link href={href} {...props}>{children}</Link>;

const calloutTypes = {
  note: { icon: 'bi-info-circle', label: 'Note' },
  tip: { icon: 'bi-lightbulb', label: 'Conseil' },
  important: { icon: 'bi-exclamation-circle', label: 'Important' },
  warning: { icon: 'bi-exclamation-triangle', label: 'Attention' },
};

/**
 * Encadré mis en avant
 * <Callout type="note|tip|important|warning" title="...">...</Callout>
 */
export function Callout({ type = 'note', title, children }) {
  const { icon, label } = calloutTypes[type] || calloutTypes.note;
  return (
    <aside className={`docs-callout docs-callout-${type}`}>
      <i className={`bi ${icon} docs-callout-icon`} aria-hidden="true"></i>
      <div className="docs-callout-body">
        <p className="docs-callout-title">{title || label}</p>
        {children}
      </div>
    </aside>
  );
}

/**
 * Étapes numérotées
 * <Steps><Step title="...">...</Step></Steps>
 */
export function Steps({ children }) {
  return <ol className="docs-steps">{children}</ol>;
}

export function Step({ title, children }) {
  return (
    <li className="docs-step">
      {title && <p className="docs-step-title">{title}</p>}
      {children}
    </li>
  );
}

/**
 * Lien vers l'étape suivante d'un parcours
 * <NextStep href="...">Libellé</NextStep>
 */
export function NextStep({ href, children }) {
  return (
    <SmartLink href={href} className="docs-next-step">
      <span className="docs-next-step-label">Étape suivante</span>
      <span className="docs-next-step-title">{children}</span>
      <i className="bi bi-arrow-right" aria-hidden="true"></i>
    </SmartLink>
  );
}

/**
 * Grille de cartes de navigation
 * <Cards><Card href="..." title="..." icon="bi-...">Description</Card></Cards>
 */
export function Cards({ children }) {
  return <div className="docs-cards">{children}</div>;
}

export function Card({ href, title, icon, children }) {
  return (
    <SmartLink href={href} className="docs-card">
      {icon && <i className={`bi ${icon} docs-card-icon`} aria-hidden="true"></i>}
      <span className="docs-card-title">{title}</span>
      {children && <span className="docs-card-text">{children}</span>}
    </SmartLink>
  );
}

/**
 * Formule centrée, avec légende facultative
 * <Formula math={'L = (I - A)^{-1}'} caption="Matrice de Leontief" />
 */
export function Formula({ math, caption }) {
  return (
    <figure className="docs-formula">
      <BlockMath math={math} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
