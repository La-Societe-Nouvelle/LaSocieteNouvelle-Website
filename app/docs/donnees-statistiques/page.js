import DocsPageLayout from '../../../components/docs/DocsPageLayout';
import Content from './content.mdx';
import 'katex/dist/katex.min.css'

export const metadata = {
  title: 'Données statistiques - Documentation',
  description: 'Méthodologie, sources et jeux de données statistiques des empreintes des activités économiques',
};


export default function DonneesStatistiquesPage() {
  return (
    <DocsPageLayout
      title="Données statistiques"
    >
      <Content />
    </DocsPageLayout>
  );
}
