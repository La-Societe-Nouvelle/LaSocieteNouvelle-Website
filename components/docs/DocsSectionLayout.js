'use client';

import { createContext, useState, useContext } from 'react';
import DocsPageLayout from './DocsPageLayout';

// Context pour que les pages renseignent une navigation complémentaire (ex. autres indicateurs)
const PageContext = createContext();

export function usePageContext() {
  return useContext(PageContext);
}

/**
 * Layout partagé des sections dont les pages sont des composants client.
 * Le titre, le menu latéral, le fil d'Ariane et « Précédent / Suivant » viennent de lib/docsConfig.js.
 */
export default function DocsSectionLayout({ children }) {
  const [customNavigation, setCustomNavigation] = useState(null);
  const [customNavigationTitle, setCustomNavigationTitle] = useState(null);

  return (
    <PageContext.Provider value={{
      setCustomNavigation,
      setCustomNavigationTitle
    }}>
      <DocsPageLayout
        navigation={customNavigation || []}
        navigationTitle={customNavigationTitle}
      >
        {children}
      </DocsPageLayout>
    </PageContext.Provider>
  );
}
