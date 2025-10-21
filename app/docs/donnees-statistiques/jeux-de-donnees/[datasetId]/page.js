import DocsPageLayout from '../../../../../components/docs/DocsPageLayout';
import { notFound } from 'next/navigation';

// Liste des datasets disponibles
const datasets = {
  'macro_fpt_a38': {
    title: 'Empreintes des branches d\'activité ',
    code: 'macro_fpt_a38',
    description: 'Données historiques des empreintes sociétales et environnementales des branches d\'activité (nomenclature A38)',
  },
  'macro_fpt_a88': {
    title: 'Empreintes des divisions économiques ',
    code: 'macro_fpt_a88',
    description: 'Données historiques des empreintes sociétales et environnementales des divisions économiques (nomenclature A88)',
  },
  'macro_fpt_trd_a38': {
    title: 'Empreintes des branches d\'activité ',
    code: 'macro_fpt_trd_a38',
    description: 'Données de tendances des empreintes par branche d\'activité',
  },
  'macro_fpt_trd_a88': {
    title: 'Empreintes des divisions économiques ',
    code: 'macro_fpt_trd_a88',
    description: 'Données de tendances des empreintes par division économique',
  },
  'macro_fpt_tgt_a38': {
    title: 'Objectifs annuels par branches d\'activité',
    code: 'macro_fpt_tgt_a38',
    description: 'Trajectoires cibles des empreintes par branche d\'activité',
  },
  'macro_fpt_tgt_a88': {
    title: 'Objectifs annuels des divisions économiques',
    code: 'macro_fpt_tgt_a88',
    description: 'Trajectoires cibles des empreintes par division économique',
  },
  'na_cpeb': {
    title: 'Comptes de production et d\'exploitation par branche',
    code: 'na_cpeb',
    description: 'Données des comptes nationaux - comptes de production et d\'exploitation',
  },
  'na_ere': {
    title: 'Tableau des entrées ressources emplois',
    code: 'na_ere',
    description: 'Données des comptes nationaux - tableau entrées-ressources-emplois',
  },
  'na_pat_nf': {
    title: 'Comptes de patrimoine non-financier',
    code: 'na_pat_nf',
    description: 'Données des comptes nationaux - patrimoine non-financier',
  },
  'na_tei': {
    title: 'Tableau des entrées intermédiaires',
    code: 'na_tei',
    description: 'Données des comptes nationaux - tableau des entrées intermédiaires',
  },
  'na_tess': {
    title: 'Tableau des entrées-sorties symétrique',
    code: 'na_tess',
    description: 'Données des comptes nationaux - tableau entrées-sorties symétrique',
  },
  'bts_data': {
    title: 'Indicateurs issus de la base tous salariés',
    code: 'bts_data',
    description: 'Données sociales issues de la base tous salariés',
  },
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
