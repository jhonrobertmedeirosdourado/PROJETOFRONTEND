import { Link } from 'react-router-dom';

// Componente de informações do rodapé: title + informations[{ text, link }]
export default function FooterInfo({ title, informations = [] }) {
  return (
    <div className="footer-info">
      <h3 className="footer-info__title">{title}</h3>
      <ul className="footer-info__list">
        {informations.map(({ text, link }) => (
          <li key={text}>
            {link ? <Link to={link}>{text}</Link> : <span>{text}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
