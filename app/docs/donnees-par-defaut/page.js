import DocsPageLayout from '../../../components/docs/DocsPageLayout';
import Content from './content.mdx';

export const metadata = {
  title: 'Données par défaut - Documentation',
  description: 'Méthodologie de construction des données par défaut des indicateurs de l\'Empreinte Sociétale de l\'Entreprise',
};


export default function DonneesParDefaut() {
  return (
    <DocsPageLayout
      title="Données par défaut"
    >
      <Content />
    </DocsPageLayout>
  );
}
