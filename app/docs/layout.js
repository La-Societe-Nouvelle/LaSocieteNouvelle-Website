import DocsHeader from '../../components/docs/DocsHeader';
import DocsFooter from '../../components/docs/DocsFooter';
import 'katex/dist/katex.min.css';

export const metadata = {
  title: {
    default: 'Documentation - La Société Nouvelle',
    template: '%s - Documentation',
  },
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
