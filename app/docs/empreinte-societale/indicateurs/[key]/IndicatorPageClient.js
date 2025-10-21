'use client';

import { useEffect } from 'react';
import metaData from '@/lib/metaData.json';
import { usePageContext } from '../../layout-client';

export default function IndicatorPageClient({ indicatorKey, indicator }) {
  const { setPageTitle, setPageBreadcrumb, setCustomNavigation, setCustomNavigationTitle } = usePageContext();

  useEffect(() => {
    setPageTitle(indicator.libelle);
    setPageBreadcrumb([
      { href: '/docs/empreinte-societale', title: 'Empreinte Sociétale' },
      { href: '/docs/empreinte-societale/indicateurs', title: 'Indicateurs' },
      { title: indicator.libelle }
    ]);

    // Configurer la navigation vers les autres indicateurs de la même catégorie
    const isEnvironmental = metaData['indics-env'].indics.includes(indicatorKey);
    const relatedIndics = isEnvironmental
      ? metaData['indics-env'].indics
      : metaData['indics-es'].indics;

    const navigation = relatedIndics
      .filter(indic => indic !== indicatorKey)
      .map(indic => ({
        href: `/docs/empreinte-societale/indicateurs/${indic}`,
        title: metaData[indic].libelle,
      }));

    setCustomNavigation(navigation);
    setCustomNavigationTitle(isEnvironmental ? 'INDICATEURS ENVIRONNEMENTAUX' : 'INDICATEURS SOCIO-ÉCONOMIQUES');

    // Nettoyer au démontage
    return () => {
      setCustomNavigation(null);
      setCustomNavigationTitle(null);
    };
  }, [indicatorKey, indicator, setPageTitle, setPageBreadcrumb, setCustomNavigation, setCustomNavigationTitle]);

  // Ce composant ne fait que configurer le contexte, il ne rend rien
  return null;
}
