'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Recherche plein texte dans la documentation (index Pagefind généré au build)
 * Ouverture : bouton du header, Ctrl+K / Cmd+K ou « / »
 */

// L'index est généré à partir des fichiers .html de .next/server/app
const toHref = (url) => url.replace(/\.html$/, '').replace(/\/index$/, '') || '/';

let pagefindPromise;
const loadPagefind = () => {
  pagefindPromise ??= import(/* webpackIgnore: true */ '/pagefind/pagefind.js')
    .then(async (pagefind) => {
      await pagefind.options({ excerptLength: 24 });
      return pagefind;
    })
    .catch((error) => {
      pagefindPromise = undefined;
      throw error;
    });
  return pagefindPromise;
};

export default function DocsSearch() {
  const router = useRouter();
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | loading | ready | unavailable
  const [activeIndex, setActiveIndex] = useState(0);

  const open = useCallback(() => {
    dialogRef.current?.showModal();
    inputRef.current?.select();
    loadPagefind().catch(() => setStatus('unavailable'));
  }, []);

  const close = () => dialogRef.current?.close();

  // Raccourcis clavier
  useEffect(() => {
    const onKeyDown = (event) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName) || event.target.isContentEditable;
      if ((event.key === 'k' && (event.ctrlKey || event.metaKey)) || (event.key === '/' && !typing)) {
        event.preventDefault();
        open();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // Recherche
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    let cancelled = false;
    setStatus('loading');

    loadPagefind()
      .then(async (pagefind) => {
        const search = await pagefind.debouncedSearch(query, {}, 200);
        if (cancelled || !search) return;
        const data = await Promise.all(search.results.slice(0, 8).map((result) => result.data()));
        if (cancelled) return;
        setResults(data);
        setActiveIndex(0);
        setStatus('ready');
      })
      .catch(() => !cancelled && setStatus('unavailable'));

    return () => { cancelled = true; };
  }, [query]);

  const go = (result) => {
    close();
    router.push(toHref(result.url));
  };

  const onInputKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, results.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === 'Enter' && results[activeIndex]) {
      event.preventDefault();
      go(results[activeIndex]);
    }
  };

  return (
    <>
      <button type="button" className="docs-search-trigger" onClick={open}>
        <i className="bi bi-search" aria-hidden="true"></i>
        <span className="docs-search-trigger-label">Rechercher</span>
        <kbd>Ctrl K</kbd>
      </button>

      <dialog
        ref={dialogRef}
        className="docs-search-dialog"
        aria-label="Rechercher dans la documentation"
        onClick={(event) => event.target === dialogRef.current && close()}
      >
        <div className="docs-search-panel">
          <div className="docs-search-field">
            <i className="bi bi-search" aria-hidden="true"></i>
            <input
              ref={inputRef}
              type="search"
              placeholder="Rechercher dans la documentation…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={onInputKeyDown}
              aria-controls="docs-search-results"
              aria-activedescendant={results[activeIndex] ? `docs-search-result-${activeIndex}` : undefined}
            />
            <button type="button" className="docs-search-close" onClick={close}>
              Échap
            </button>
          </div>

          <div className="docs-search-body">
            {status === 'unavailable' && (
              <p className="docs-search-message">
                La recherche n'est pas disponible : l'index est généré lors du build (<code>npm run build</code>).
              </p>
            )}
            {status === 'ready' && query.trim() && results.length === 0 && (
              <p className="docs-search-message">Aucun résultat pour « {query} ».</p>
            )}
            {results.length > 0 && (
              <ul id="docs-search-results" className="docs-search-results" role="listbox">
                {results.map((result, index) => (
                  <li
                    key={result.url}
                    id={`docs-search-result-${index}`}
                    role="option"
                    aria-selected={index === activeIndex}
                    className={index === activeIndex ? 'active' : ''}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => go(result)}
                  >
                    {result.meta.section && (
                      <span className="docs-search-result-section">{result.meta.section}</span>
                    )}
                    <span className="docs-search-result-title">{result.meta.title}</span>
                    {/* Extrait fourni par Pagefind, termes recherchés entourés de <mark> */}
                    <span
                      className="docs-search-result-excerpt"
                      dangerouslySetInnerHTML={{ __html: result.excerpt }}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
