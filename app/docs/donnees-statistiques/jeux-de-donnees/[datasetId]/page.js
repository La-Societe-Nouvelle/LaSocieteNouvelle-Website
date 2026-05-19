import DocsPageLayout from '../../../../../components/docs/DocsPageLayout';
import { notFound } from 'next/navigation';

// Liste des datasets disponibles
const datasets = {
  'macro_fpt': {
    title: 'Empreintes des activités économiques - Données historiques',
    code: 'macro_fpt',
    description: 'Données historiques des empreintes sociétales et environnementales des activités économiques',
  },
  'macro_fpt_trd': {
    title: 'Empreintes des activités économiques - Tendances',
    code: 'macro_fpt_trd',
    description: 'Tendances des empreintes sociétales et environnementales des activités économiques',
  },
  'macro_fpt_tgt': {
    title: 'Empreintes des activités économiques - Objectifs annuels',
    code: 'macro_fpt_tgt',
    description: 'Trajectoires cibles des empreintes sociétales et environnementales des activités économiques',
  }
};

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
    title: `${dataset.title} - Documentation`,
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
    <DocsPageLayout
      title={dataset.title}
      breadcrumb={[
        { href: '/docs', title: 'Documentation' },
        { href: '/docs/donnees-statistiques', title: 'Données statistiques' },
        { title: dataset.title }
      ]}
    >
      <Content />
    </DocsPageLayout>
  );
}
