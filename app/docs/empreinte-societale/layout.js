import EmpreinteSocietaleLayoutClient from './layout-client';

export const metadata = {
  title: 'Empreinte Sociétale - Documentation',
  description: 'Méthodologie et présentation des indicateurs du référentiel de l\'Empreinte Sociétale de l\'Entreprise',
};

export default function EmpreinteSocietaleLayout({ children }) {
  return <EmpreinteSocietaleLayoutClient>{children}</EmpreinteSocietaleLayoutClient>;
}