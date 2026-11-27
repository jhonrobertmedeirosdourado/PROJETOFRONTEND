import { Link } from 'react-router-dom';
import Layout from './Layout.jsx';

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="container" style={{ padding: '64px clamp(16px, 7vw, 100px)', display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
        <h1>Página não encontrada ou em construção</h1>
        <p>Não encontramos o endereço que você acessou.</p>
        <Link to="/" style={{ color: 'var(--primary)' }}>Voltar para a Home</Link>
      </div>
    </Layout>
  );
}
