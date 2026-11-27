import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

// Ao navegar (ex.: clicar num produto no fim da página) volta ao topo
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Recebe as páginas via "children" e as renderiza entre Header e Footer
export default function Layout({ children }) {
  return (
    <div className="layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}
