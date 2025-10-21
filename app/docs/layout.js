import DocsHeader from '../../components/docs/DocsHeader';
import DocsFooter from '../../components/docs/DocsFooter';

export const metadata = {
  title: 'Documentation - La Société Nouvelle',
  description: 'Guides, ressources et références techniques',
};

export default function DocsLayout({ children }) {
  return (
    <div className='docs-theme'>
      <DocsHeader />
      {children}
      <DocsFooter />
    </div>
  );
}
