import DocsPageLayout from '../../../components/docs/DocsPageLayout';
import Content from './content.mdx';
import 'katex/dist/katex.min.css'

export const metadata = {
  title: 'Empreinte Sociétale - Documentation',
  description: 'Méthodologie et présentation des 12 indicateurs du référentiel de l\'Empreinte Sociétale',
};


const navigation = [
  {
    href: '/docs/donnees-statistiques/methodologie',
    title: 'Méthodologie',
  },
  {
    href: '/docs/donnees-statistiques/sources-impacts-directs',
    title: 'Sources - Impacts directs',
  },
];

export default function DonneesStatistiquesPage() {
  return (
    <DocsPageLayout
      title="Données statistiques"
      navigation={navigation}
      navigationTitle="SECTIONS DÉTAILLÉES"
    >
      <Content />
    </DocsPageLayout>
  );
}
