import Link from 'next/link';

/**
 * Liens « Précédent / Suivant » en bas de page
 */
export default function DocsPrevNext({ prev, next }) {
  if (!prev && !next) return null;

  return (
    <nav className="docs-prev-next" aria-label="Pagination de la documentation">
      {prev ? (
        <Link href={prev.href} className="docs-prev-next-link prev">
          <span className="docs-prev-next-label">← Précédent</span>
          <span className="docs-prev-next-title">{prev.title}</span>
        </Link>
      ) : <span />}
      {next ? (
        <Link href={next.href} className="docs-prev-next-link next">
          <span className="docs-prev-next-label">Suivant →</span>
          <span className="docs-prev-next-title">{next.title}</span>
        </Link>
      ) : <span />}
    </nav>
  );
}
