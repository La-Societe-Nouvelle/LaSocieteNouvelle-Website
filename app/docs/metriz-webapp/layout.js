import DocsSectionLayout from '@/components/docs/DocsSectionLayout';

export const metadata = {
  title: 'Metriz - Application Web',
  description: 'Documentation de l\'application web Metriz pour la mesure de l\'Empreinte Sociétale de l\'Entreprise',
};

export default function MetrizWebappLayout({ children }) {
  return <DocsSectionLayout>{children}</DocsSectionLayout>;
}
