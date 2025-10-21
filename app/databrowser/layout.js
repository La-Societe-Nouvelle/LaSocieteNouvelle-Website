import DatabrowserHeader from '../../components/databrowser/DatabrowserHeader';
import DatabrowserFooter from '../../components/databrowser/DatabrowserFooter';

export const metadata = {
  title: 'Data Browser - La Société Nouvelle',
  description: 'Portail Open Data - Données statistiques extra-financières',
};

export default function DatabrowserLayout({ children }) {
  return (
    <div className='databrowser-theme'>
      <DatabrowserHeader />
      {children}
      <DatabrowserFooter />
    </div>
  );
}
