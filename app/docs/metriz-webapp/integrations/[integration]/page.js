import { notFound } from 'next/navigation';
import IntegrationPageClient from './IntegrationPageClient';

// Liste des intégrations documentées
const integrations = {
  acd: {
    title: 'Intégration ACD',
    description: 'Documentation de l’intégration entre Metriz et ACD.',
  },
  inqom: {
    title: 'Intégration Inqom',
    description: 'Documentation de l’intégration entre Metriz et Inqom.',
  },
  myunisoft: {
    title: 'Intégration MyUnisoft',
    description: 'Documentation de l’intégration entre Metriz et MyUnisoft.',
  },
  openpaye: {
    title: 'Intégration OpenPaye',
    description: 'Documentation de l’intégration entre Metriz et OpenPaye.',
  },
  pennylane: {
    title: 'Intégration Pennylane',
    description: 'Documentation de l’intégration entre Metriz et Pennylane.',
  },
  tiime: {
    title: 'Intégration Tiime',
    description: 'Documentation de l’intégration entre Metriz et Tiime.',
  }
};

async function loadIntegrationContent(integration) {
  try {
    return (await import(`./content/${integration}.mdx`)).default;
  } catch (error) {
    console.error(`Unable to load content for integration "${integration}":`, error);
    return null;
  }
}

export async function generateStaticParams() {
  return Object.keys(integrations).map((integration) => ({
    integration,
  }));
}

export async function generateMetadata({ params }) {
  const { integration } = await params;
  const integrationPageMetadata = integrations[integration];

  if (!integrationPageMetadata) {
    return {
      title: 'Intégration introuvable',
    };
  }

  return {
    title: `${integrationPageMetadata.title} - Documentation`,
    description: integrationPageMetadata.description,
  };
}

export default async function IntegrationPage({ params }) {
  const { integration } = await params;
  const integrationPageMetadata = integrations[integration];

  if (!integrationPageMetadata) {
    notFound();
  }

  const Content = await loadIntegrationContent(integration);

  if (!Content) {
    notFound();
  }

  return (
    <>
      <IntegrationPageClient title={integrationPageMetadata.title} />
      <Content />
    </>
  );
}
