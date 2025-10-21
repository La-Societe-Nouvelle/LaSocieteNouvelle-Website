import DocsPageLayout from '../../../../components/docs/DocsPageLayout';
import Content from './content.mdx';

export default function MethodologieDonneesStatistiquesPage() {
  return (
    <DocsPageLayout
      title="Méthodologie"
      breadcrumb={[
        { href: '/docs', title: 'Documentation' },
        { href: '/docs/donnees-statistiques', title: 'Données statistiques' },
        { title: 'Méthodologie' }
      ]}
    >
      <Content />
    </DocsPageLayout>
  );
}
