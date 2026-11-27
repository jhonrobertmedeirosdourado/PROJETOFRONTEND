import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import Logo from './Logo.jsx';
import { SearchIcon, CartIcon } from './Icons.jsx';
import './Header.css';

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Produtos' },
  { to: '/categories', label: 'Categorias' },
  { to: '/orders', label: 'Meus Pedidos' },
];

export default function Header() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [term, setTerm] = useState(searchParams.get('filter') ?? '');

  // Mantém o campo sincronizado com a URL (ex.: ao voltar no navegador)
  useEffect(() => {
    setTerm(searchParams.get('filter') ?? '');
  }, [searchParams]);

  // O <form> já cobre os dois casos: clique na lupa (botão submit) e tecla Enter
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = term.trim();
    navigate(query ? `/products?filter=${encodeURIComponent(query)}` : '/products');
  };

  return (
    <header className="header">
      <div className="container header__top">
        <Link to="/" className="header__logo" aria-label="Store - Página inicial">
          <Logo />
        </Link>

        <form className="header__search" role="search" onSubmit={handleSubmit}>
          <input
            type="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Pesquisar produto..."
            aria-label="Pesquisar produto"
          />
          <button type="submit" aria-label="Buscar">
            <SearchIcon />
          </button>
        </form>

        <div className="header__actions">
          <Link to="/signup" className="header__signup">Cadastre-se</Link>
          <Link to="/login" className="header__login">Entrar</Link>
          <span className="header__cart" aria-label="Carrinho de compras" role="img">
            <CartIcon />
          </span>
        </div>
      </div>

      <nav className="container header__nav" aria-label="Navegação principal">
        {NAV_LINKS.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} className="header__link">
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
