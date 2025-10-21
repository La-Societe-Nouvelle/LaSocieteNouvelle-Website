import { notFound } from 'next/navigation';
import metaData from '@/lib/metaData.json';
import IndicatorPageClient from './IndicatorPageClient';

export async function generateStaticParams() {
  return metaData.indics.map((indic) => ({
    indicateur: indic,
  }));
}

export async function generateMetadata({ params }) {
  const { indicateur } = await params;
  const indicator = metaData[indicateur];

  if (!indicator) {
    return {
      title: 'Indicateur non trouvé',
    };
  }

  return {
    title: `${indicator.libelle} - Documentation`,
    description: indicator.description,
  };
}

export default async function IndicatorPage({ params }) {
  const { indicateur } = await params;
  const indicator = metaData[indicateur];

  if (!indicator || !metaData.indics.includes(indicateur)) {
    notFound();
  }

  // Chargement du MDX côté serveur 
  let MDXContent = null;
  try {
    MDXContent = (await import(`./content/${indicateur}.mdx`)).default;
  } catch (error) {
    console.error(`Error loading MDX content for ${indicateur}:`, error);
    notFound();
  }

  return (
    <>
      <IndicatorPageClient
        indicatorKey={indicateur}
        indicator={indicator}
      />
      <MDXContent indicator={indicator} />
    </>
  );
}
