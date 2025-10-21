'use client';

import { useEffect } from 'react';
import { usePageContext } from '../layout-client';
import Content from './content.mdx';


export default function ApplicationFluxComptablesPage() {

  const { setPageTitle, setPageBreadcrumb } = usePageContext();

  useEffect(() => {
    setPageTitle('Application des indicateurs aux flux comptables');
    setPageBreadcrumb([
      { href: '/docs/empreinte-societale', title: 'Empreinte Sociétale' },
      { title: 'Application aux flux comptables' }
    ]);
  }, [setPageTitle, setPageBreadcrumb]);


  return (
    <Content />
  );
}
