import Link from 'next/link';
import docsPages from '@/lib/docsPages.json';
import { normalizePath } from '@/lib/docsConfig';

const dateFormat = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/**
 * Date de mise à jour et lien « Signaler une erreur » en bas de page
 * Dates générées par scripts/generate-docs-pages.js
 */
export default function DocsPageMeta({ pathname }) {
  const path = normalizePath(pathname);
  const page = docsPages.find((p) => new RegExp(p.pattern).test(path));

  return (
    <div className="docs-page-meta">
      {page?.updated && (
        <span>Mis à jour le {dateFormat.format(new Date(`${page.updated}T00:00:00Z`))}</span>
      )}
      <Link href="/contact">
        <i className="bi bi-flag" aria-hidden="true"></i>
        Signaler une erreur
      </Link>
    </div>
  );
}
