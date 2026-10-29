import { notFound } from 'next/navigation';
import metaData from '@/lib/metaData.json';

export async function generateStaticParams() {
  return metaData.indics.map((indic) => ({
    key: indic,
  }));
}

export async function generateMetadata({ params }) {
  const { key } = await params;
  const indicator = metaData[key];

  if (!indicator) {
    return {
      title: 'Indicateur non trouvé',
    };
  }

  return {
    title: indicator.libelle,
    description: indicator.description,
  };
}

export default async function IndicatorPage({ params }) {
  const { key } = await params;
  const indicator = metaData[key];

  if (!indicator || !metaData.indics.includes(key)) {
    notFound();
  }

  // Chargement du MDX côté serveur
  let MDXContent = null;
  try {
    MDXContent = (await import(`./content/${key}.mdx`)).default;
  } catch (error) {
    console.error(`Error loading MDX content for ${key}:`, error);
    notFound();
  }

  return <MDXContent indicator={indicator} />;
}
