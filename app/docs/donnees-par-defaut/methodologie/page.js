import DocsPageLayout from '../../../../components/docs/DocsPageLayout';
import Content from './content.mdx';
import { docsMetadata } from '@/lib/docsConfig';

export const metadata = docsMetadata('/docs/donnees-par-defaut/methodologie');

export default function MethodologieDonneesParDefautPage() {
  return (
    <DocsPageLayout>
      <Content />
    </DocsPageLayout>
  );
}
