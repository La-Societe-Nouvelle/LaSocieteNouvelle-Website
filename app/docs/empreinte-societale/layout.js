import DocsSectionLayout from '@/components/docs/DocsSectionLayout';

export const metadata = {
  title: 'Empreinte Sociétale - Documentation',
  description: 'Méthodologie et présentation des indicateurs du référentiel de l\'Empreinte Sociétale de l\'Entreprise',
};

export default function EmpreinteSocietaleLayout({ children }) {
  return <DocsSectionLayout>{children}</DocsSectionLayout>;
}