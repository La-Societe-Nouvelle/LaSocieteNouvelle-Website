import { notFound } from 'next/navigation';
import { metrizIntegrations as integrations } from '@/lib/docsConfig';


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
    title: integrationPageMetadata.title,
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
      <Content />
    </>
  );
}
