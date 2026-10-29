import DocsPageLayout from '../../../../components/docs/DocsPageLayout';
import Content from './content.mdx';
import { docsMetadata } from '@/lib/docsConfig';

export const metadata = docsMetadata('/docs/donnees-statistiques/methodologie');

export default function MethodologieDonneesStatistiquesPage() {
  return (
    <DocsPageLayout>
      <Content />
    </DocsPageLayout>
  );
}
