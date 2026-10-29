import DocsPageLayout from '../../../../components/docs/DocsPageLayout';
import Content from './content.mdx';
import { docsMetadata } from '@/lib/docsConfig';

export const metadata = docsMetadata('/docs/donnees-statistiques/sources');

export default function SourcesPage() {
  return (
    <DocsPageLayout>
      <Content />
    </DocsPageLayout>
  );
}
