/**
 * Ce fichier permet de personnaliser les composants rendus par MDX
 * Situé à la racine du projet, il est automatiquement détecté par Next.js
 */

import Image from "next/image";
import { getLocalImageSize } from "@/lib/utils/imageSize";
import * as docsComponents from "@/components/docs/mdx";

// Texte brut d'un titre, y compris quand il contient des liens ou de l'emphase
const textOf = (node) => {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  return node?.props?.children ? textOf(node.props.children) : '';
};

const slugify = (text) => text
  .normalize('NFD').replace(/\p{Diacritic}/gu, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || undefined;

export function useMDXComponents(components) {
  return {
    // Images locales optimisées via next/image (srcSet responsive, lazy loading)
    img: ({ src, alt }) => {
      const size = src?.startsWith("/") ? getLocalImageSize(src) : null;
      if (!size) {
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={src} alt={alt} />;
      }
      return (
        <Image
          src={src}
          alt={alt || ""}
          width={size.width}
          height={size.height}
          sizes="(max-width: 991px) 100vw, 990px"
        />
      );
    },
    // Personnalisation des éléments HTML de base
    h1: ({ children }) => (
      <h1 className="docs-page-title">{children}</h1>
    ),
    // Ids générés à partir du texte pour les ancres et le sommaire
    h2: ({ children }) => <h2 id={slugify(textOf(children))}>{children}</h2>,
    h3: ({ children }) => <h3 id={slugify(textOf(children))}>{children}</h3>,
    h4: ({ children }) => <h4 id={slugify(textOf(children))}>{children}</h4>,
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
    // Composants de documentation (encadrés, étapes, cartes, formules)
    ...docsComponents,
    ...components,
  };
}
