'use client';

import { useEffect } from 'react';
import { usePageContext } from '@/components/docs/DocsSectionLayout';

export default function IntegrationPageClient({ title }) {
  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle(title);
  }, [title, setPageTitle]);

  return null;
}
