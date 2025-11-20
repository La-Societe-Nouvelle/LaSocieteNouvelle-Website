'use client';

import { createContext, useState, useContext } from 'react';
import { usePathname } from 'next/navigation';
import DocsPageLayout from '@/components/docs/DocsPageLayout';

const allNavigation = [
  {
    href: '/docs/metriz-webapp/',
    title: 'Présentation',
  },
  {
    href: '/docs/metriz-webapp/tutoriel',
    title: 'Guide d\'Utilisation',
  },
  {
    href: '/docs/metriz-webapp/informations-necessaires',
    title: 'Informations nécessaires',
  },
  {
    href: '/docs/metriz-webapp/etapes-de-calcul',
    title: 'Etapes de calcul',
  },
  {
    href: '/docs/metriz-webapp/declarations',
    title: 'Déclarations',
  },
  {
    href: '/docs/metriz-webapp/lecture-fec',
    title: 'Lecture du FEC',
  },
  {
    href: '/docs/metriz-webapp/lecture-dsn',
    title: 'Lecture des DSN',
  },
];

// Context pour partager title, breadcrumb, navigation
const PageContext = createContext();

export function usePageContext() {
  return useContext(PageContext);
}

export default function MetrizWebappLayoutClient({ children }) {
  const pathname = usePathname();
  const defaultNavigation = allNavigation.filter(item => item.href !== pathname);

  const [pageTitle, setPageTitle] = useState('');
  const [pageBreadcrumb, setPageBreadcrumb] = useState([]);
  const [customNavigation, setCustomNavigation] = useState(null);
  const [customNavigationTitle, setCustomNavigationTitle] = useState(null);

  // Utiliser la navigation personnalisée si définie, sinon la navigation par défaut
  const navigation = customNavigation || defaultNavigation;
  const navigationTitle = customNavigationTitle || 'SECTIONS';

  return (
    <PageContext.Provider value={{
      pageTitle,
      setPageTitle,
      pageBreadcrumb,
      setPageBreadcrumb,
      setCustomNavigation,
      setCustomNavigationTitle
    }}>
      <DocsPageLayout
        title={pageTitle}
        breadcrumb={pageBreadcrumb}
        navigation={navigation}
        navigationTitle={navigationTitle}
      >
        {children}
      </DocsPageLayout>
    </PageContext.Provider>
  );
}
