import DocsPageLayout from '../../../../components/docs/DocsPageLayout';
import Content from './content.mdx';

export default function SourcesImpactsDirectsPage() {
  return (
    <DocsPageLayout
      title="Sources - Objectifs 2030"
      breadcrumb={[
        { href: '/docs', title: 'Documentation' },
        { href: '/docs/donnees-statistiques', title: 'Données statistiques' },
        { title: 'Sources - Objectifs 2030' }
      ]}
    >
      <Content />
    </DocsPageLayout>
  );
}
