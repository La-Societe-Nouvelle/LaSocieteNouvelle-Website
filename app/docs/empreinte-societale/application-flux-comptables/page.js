'use client';

import { useEffect } from 'react';
import { usePageContext } from '@/components/docs/DocsSectionLayout';
import Content from './content.mdx';


export default function ApplicationFluxComptablesPage() {

  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle('Application des indicateurs aux flux comptables');
  }, [setPageTitle]);


  return (
    <Content />
  );
}
