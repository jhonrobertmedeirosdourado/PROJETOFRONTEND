import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ProductListingPage from './pages/ProductListingPage.jsx';
import ProductViewPage from './pages/ProductViewPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* A documentação cita /produtos e /products: aceitamos as duas */}
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        {/* Categorias, Meus Pedidos, Login etc. caem aqui (em construção) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
