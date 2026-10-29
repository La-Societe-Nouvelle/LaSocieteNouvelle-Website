import { notFound } from 'next/navigation';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import metaData from '@/lib/metaData.json';

export async function generateStaticParams() {
  return metaData.indics.map((indicateur) => ({ indicateur }));
}

export async function generateMetadata({ params }) {
  const { indicateur } = await params;
  return { title: metaData[indicateur] ? `${metaData[indicateur].libelle} - Sources` : 'Indicateur non trouvé' };
}

export default async function SourcesIndicatorPage({ params }) {
  const { indicateur } = await params;
  if (!metaData.indics.includes(indicateur)) notFound();

  let MDXContent = null;
  try {
    MDXContent = (await import(`./content/${indicateur}.mdx`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <DocsPageLayout>
      <MDXContent />
    </DocsPageLayout>
  );
}
