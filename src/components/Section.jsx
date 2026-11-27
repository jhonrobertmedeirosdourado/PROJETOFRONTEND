import { Link } from 'react-router-dom';
import './Section.css';

// Props: title, titleAlign ("left" | "center"), link { text, href }, children
export default function Section({ title, titleAlign = 'left', link, children }) {
  const align = titleAlign === 'center' ? 'center' : 'left';
  // Links internos (/products) usam <Link> para não recarregar a página
  const isInternal = link?.href?.startsWith('/');

  return (
    <section className="section">
      <div className={`section__header section__header--${align}`}>
        <h2 className="section__title">{title}</h2>
        {link &&
          (isInternal ? (
            <Link className="section__link" to={link.href}>{link.text}</Link>
          ) : (
            <a className="section__link" href={link.href} rel="noopener noreferrer">{link.text}</a>
          ))}
      </div>
      {children}
    </section>
  );
}
