'use client';

import { createContext, useState, useContext } from 'react';
import { usePathname } from 'next/navigation';
import DocsPageLayout from '@/components/docs/DocsPageLayout';

const allNavigation = [
  {
    href: '/docs/empreinte-societale/',
    title: 'Empreinte Sociétale',
  },
  {
    href: '/docs/empreinte-societale/description',
    title: 'Description',
  },
  {
    href: '/docs/empreinte-societale/indicateurs',
    title: 'Les indicateurs',
  },
  {
    href: '/docs/empreinte-societale/methodologie',
    title: 'Méthodologie',
  },
  {
    href: '/docs/empreinte-societale/application-flux-comptables',
    title: 'Application comptable',
  },
];

// Context pour partager title, breadcrumb, navigation
const PageContext = createContext();

export function usePageContext() {
  return useContext(PageContext);
}

export default function EmpreinteSocietaleLayoutClient({ children }) {
  const pathname = usePathname();
  const defaultNavigation = allNavigation.filter(item => item.href !== pathname);

  const [pageTitle, setPageTitle] = useState('');
  const [pageBreadcrumb, setPageBreadcrumb] = useState([]);
  const [customNavigation, setCustomNavigation] = useState(null);
  const [customNavigationTitle, setCustomNavigationTitle] = useState(null);

  // Utiliser la navigation personnalisée si définie, sinon la navigation par défaut
  const navigation = customNavigation || defaultNavigation;
  const navigationTitle = customNavigationTitle || 'SECTIONS DÉTAILLÉES';

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
