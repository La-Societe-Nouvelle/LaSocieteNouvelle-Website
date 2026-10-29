'use client';

import { useEffect } from 'react';
import { usePageContext } from '@/components/docs/DocsSectionLayout';
import Content from './content.mdx';

export default function TutorielPage() {
  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle('Vue d\'ensemble du parcours');
  }, [setPageTitle]);

  return <Content />;
}
