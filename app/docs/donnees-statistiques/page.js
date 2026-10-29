import DocsPageLayout from '../../../components/docs/DocsPageLayout';
import Content from './content.mdx';
import { docsMetadata } from '@/lib/docsConfig';
import 'katex/dist/katex.min.css'

export const metadata = docsMetadata('/docs/donnees-statistiques', {
  description: 'Méthodologie, sources et jeux de données statistiques des empreintes des activités économiques',
});


export default function DonneesStatistiquesPage() {
  return (
    <DocsPageLayout>
      <Content />
    </DocsPageLayout>
  );
}
