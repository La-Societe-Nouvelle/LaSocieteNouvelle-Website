import DocsPageLayout from '../../../../../components/docs/DocsPageLayout';
import { notFound } from 'next/navigation';
import { statisticalDatasets as datasets } from '@/lib/docsConfig';


export async function generateStaticParams() {
  return Object.keys(datasets).map((datasetId) => ({
    datasetId,
  }));
}

export async function generateMetadata({ params }) {
  const { datasetId } = await params;
  const dataset = datasets[datasetId];

  if (!dataset) {
    return {
      title: 'Dataset introuvable',
    };
  }

  return {
    title: dataset.title,
    description: dataset.description,
  };
}

export default async function DatasetPage({ params }) {
  const { datasetId } = await params;
  const dataset = datasets[datasetId];

  if (!dataset) {
    notFound();
  }

  // Importer dynamiquement le fichier MDX
  let Content;
  try {
    Content = (await import(`./${datasetId}.mdx`)).default;
  } catch (error) {
    console.log(error)
  }

  return (
    <DocsPageLayout>
      <Content />
    </DocsPageLayout>
  );
}
