import DocsPageLayout from '../../../components/docs/DocsPageLayout';
import Content from './content.mdx';
import { docsMetadata } from '@/lib/docsConfig';

export const metadata = docsMetadata('/docs/donnees-par-defaut', {
  description: 'Méthodologie de construction des données par défaut des indicateurs de l\'Empreinte Sociétale de l\'Entreprise',
});


export default function DonneesParDefaut() {
  return (
    <DocsPageLayout>
      <Content />
    </DocsPageLayout>
  );
}
