'use client';

import { useEffect } from 'react';
import { usePageContext } from '../../layout-client';
import metaData from '@/lib/metaData.json';

export default function IndicatorPageClient({ indicatorKey, indicator }) {
  const { setPageTitle, setPageBreadcrumb, setCustomNavigation, setCustomNavigationTitle } = usePageContext();

  useEffect(() => {
    setPageTitle(indicator.libelle);
    setPageBreadcrumb([
      { href: '/docs/metriz-webapp', title: 'Application Web - METRIZ ' },
      { href: '/docs/metriz-webapp/declarations', title: 'Déclarations' },
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
        href: `/docs/metriz-webapp/declarations/${indic}`,
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

  return null;
}
