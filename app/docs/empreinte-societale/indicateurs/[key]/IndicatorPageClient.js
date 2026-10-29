'use client';

import { useEffect } from 'react';
import metaData from '@/lib/metaData.json';
import { usePageContext } from '@/components/docs/DocsSectionLayout';

export default function IndicatorPageClient({ indicatorKey, indicator }) {
  const { setPageTitle, setCustomNavigation, setCustomNavigationTitle } = usePageContext();

  useEffect(() => {
    setPageTitle(indicator.libelle);

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
  }, [indicatorKey, indicator, setPageTitle, setCustomNavigation, setCustomNavigationTitle]);

  // Ce composant ne fait que configurer le contexte, il ne rend rien
  return null;
}
