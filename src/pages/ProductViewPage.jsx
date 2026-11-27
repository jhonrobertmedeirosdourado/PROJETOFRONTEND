import { Link, useParams } from 'react-router-dom';
import Layout from './Layout.jsx';
import Gallery from '../components/Gallery.jsx';
import BuyBox from '../components/BuyBox.jsx';
import ProductOptions from '../components/ProductOptions.jsx';
import Section from '../components/Section.jsx';
import ProductListing from '../components/ProductListing.jsx';
import { getProductById, products } from '../data/products.js';
import './ProductViewPage.css';

const IMAGES = [1, 2, 3, 4].map((n) => ({ src: `/product-image-${n}.png` }));
const SIZES = ['39', '40', '41', '42', '43'];
const COLORS = ['#6FEEFF', '#FF6342', '#E2E3FF', '#FFD1DC'];

export default function ProductViewPage() {
  const { id } = useParams();
  const product = getProductById(id);

  // Produto inexistente (ex.: /product/999): mensagem em vez de tela quebrada
  if (!product) {
    return (
      <Layout>
        <div className="container product-missing">
          <h1>Produto não encontrado</h1>
          <p>O produto que você procura não existe ou foi removido.</p>
          <Link to="/products">Ver todos os produtos</Link>
        </div>
      </Layout>
    );
  }

  const recommended = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    // key={id}: ao trocar de produto, galeria e opções voltam ao estado inicial
    <Layout key={id}>
      <div className="container">
        <div className="product-view">
          <div className="product-view__gallery">
            <Gallery images={IMAGES} width="700px" height="570px" radius="4px" showThumbs />
          </div>

          <div className="product-view__info">
            <BuyBox
              name={product.name}
              reference={product.reference}
              stars={product.stars}
              rating={product.rating}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
            >
              <div className="product-view__option">
                <p>Tamanho</p>
                <ProductOptions options={SIZES} shape="square" radius="4px" type="text" label="Tamanho" />
              </div>
              <div className="product-view__option">
                <p>Cor</p>
                <ProductOptions options={COLORS} shape="circle" type="color" label="Cor" />
              </div>
            </BuyBox>
          </div>
        </div>

        <Section title="Produtos recomendados" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
          <ProductListing products={recommended} />
        </Section>
      </div>
    </Layout>
  );
}
