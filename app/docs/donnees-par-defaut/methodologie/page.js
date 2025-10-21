import DocsPageLayout from '../../../../components/docs/DocsPageLayout';
import Content from './content.mdx';

export default function MethodologieDonneesParDefautPage() {
  return (
    <DocsPageLayout
      title="Méthodologie des données par défaut"
      breadcrumb={[
        { href: '/docs', title: 'Documentation' },
        { href: '/docs/donnees-par-defaut', title: 'Données par défaut' },
        { title: 'Méthodologie' }
      ]}
    >
      <Content />
    </DocsPageLayout>
  );
}
