'use client';

import { useEffect } from 'react';
import { usePageContext } from '@/components/docs/DocsSectionLayout';
import Content from './content.mdx';

export default function UtilisationIAPage() {
  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle('Utilisation de l\'IA');
  }, [setPageTitle]);

  return <Content />;
}
