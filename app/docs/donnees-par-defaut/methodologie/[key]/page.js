import { notFound } from 'next/navigation';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import metaData from '@/lib/metaData.json';
import { defaultDataRules } from '@/lib/docsConfig';

export async function generateStaticParams() {
  return defaultDataRules.specific.map((key) => ({ key }));
}

export async function generateMetadata({ params }) {
  const { key } = await params;
  return { title: metaData[key] ? `${metaData[key].libelle} - Données par défaut` : 'Indicateur non trouvé' };
}

export default async function DefaultDataIndicatorPage({ params }) {
  const { key } = await params;
  if (!defaultDataRules.specific.includes(key)) notFound();

  let MDXContent = null;
  try {
    MDXContent = (await import(`./content/${key}.mdx`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <DocsPageLayout>
      <MDXContent />
    </DocsPageLayout>
  );
}
