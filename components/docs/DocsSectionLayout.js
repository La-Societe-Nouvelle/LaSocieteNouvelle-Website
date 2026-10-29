'use client';

import { createContext, useState, useContext } from 'react';
import DocsPageLayout from './DocsPageLayout';

// Context pour que les pages renseignent leur titre et une navigation complémentaire
const PageContext = createContext();

export function usePageContext() {
  return useContext(PageContext);
}

/**
 * Layout partagé des sections dont les pages sont des composants client.
 * Le menu latéral, le fil d'Ariane et « Précédent / Suivant » viennent de lib/docsConfig.js.
 */
export default function DocsSectionLayout({ children }) {
  const [pageTitle, setPageTitle] = useState('');
  const [customNavigation, setCustomNavigation] = useState(null);
  const [customNavigationTitle, setCustomNavigationTitle] = useState(null);

  return (
    <PageContext.Provider value={{
      pageTitle,
      setPageTitle,
      setCustomNavigation,
      setCustomNavigationTitle
    }}>
      <DocsPageLayout
        title={pageTitle}
        navigation={customNavigation || []}
        navigationTitle={customNavigationTitle}
      >
        {children}
      </DocsPageLayout>
    </PageContext.Provider>
  );
}
