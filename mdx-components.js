/**
 * Ce fichier permet de personnaliser les composants rendus par MDX
 * Situé à la racine du projet, il est automatiquement détecté par Next.js
 */

export function useMDXComponents(components) {
  return {
    // Personnalisation des éléments HTML de base
    h1: ({ children }) => (
      <h1 className="docs-page-title">{children}</h1>
    ),
    h2: ({ children }) => {
      // Générer un id à partir du texte pour les ancres
      const id = typeof children === 'string'
        ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        : undefined;
      return <h2 id={id}>{children}</h2>;
    },
    h3: ({ children }) => {
      const id = typeof children === 'string'
        ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        : undefined;
      return <h3 id={id}>{children}</h3>;
    },
    h4: ({ children }) => {
      const id = typeof children === 'string'
        ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        : undefined;
      return <h4 id={id}>{children}</h4>;
    },
    // Liens externes avec target="_blank"
    a: ({ href, children, ...props }) => {
      const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));
      if (isExternal) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
          </a>
        );
      }
      return <a href={href} {...props}>{children}</a>;
    },
    ...components,
  };
}
