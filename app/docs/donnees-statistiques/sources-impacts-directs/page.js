import DocsPageLayout from '../../../../components/docs/DocsPageLayout';
import Content from './content.mdx';
import { docsMetadata } from '@/lib/docsConfig';

export const metadata = docsMetadata('/docs/donnees-statistiques/sources-impacts-directs');

export default function SourcesImpactsDirectsPage() {
  return (
    <DocsPageLayout>
      <Content />
    </DocsPageLayout>
  );
}
