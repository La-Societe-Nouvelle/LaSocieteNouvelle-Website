'use client';

import { createContext, useState, useContext } from 'react';
import { usePathname } from 'next/navigation';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import DocsPrevNext from '@/components/docs/DocsPrevNext';
import { navigationGroups, getPrevNext } from './navigation';

// Context pour partager title, breadcrumb, navigation
const PageContext = createContext();

export function usePageContext() {
  return useContext(PageContext);
}

export default function MetrizWebappLayoutClient({ children }) {
  const pathname = usePathname();
  const { prev, next } = getPrevNext(pathname);

  const [pageTitle, setPageTitle] = useState('');
  const [pageBreadcrumb, setPageBreadcrumb] = useState([]);
  const [customNavigation, setCustomNavigation] = useState(null);
  const [customNavigationTitle, setCustomNavigationTitle] = useState(null);

  // Navigation complémentaire (ex. autres indicateurs), en plus du menu groupé
  const navigation = customNavigation || [];
  const navigationTitle = customNavigationTitle;

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
        navigationGroups={navigationGroups}
      >
        {children}
        <DocsPrevNext prev={prev} next={next} />
      </DocsPageLayout>
    </PageContext.Provider>
  );
}
