import Layout from './Layout.jsx';
import Gallery from '../components/Gallery.jsx';
import Section from '../components/Section.jsx';
import ProductListing from '../components/ProductListing.jsx';
import { products } from '../data/products.js';
import { handleImageError } from '../utils/helpers.js';
import './HomePage.css';

// Arquivos da pasta public/ são servidos na raiz: "/home-slide-1.jpeg" (sem "public/")
const SLIDES = [1, 2, 3, 4].map((n) => ({ src: `/home-slide-${n}.jpeg` }));
const COLLECTIONS = [1, 2, 3].map((n) => ({ src: `/collection-${n}.png`, alt: `Coleção em destaque ${n}` }));

export default function HomePage() {
  return (
    <Layout>
      <Gallery images={SLIDES} width={1440} height={681} className="home__gallery" />

      <div className="container">
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="home__collections">
            {COLLECTIONS.map((c) => (
              <img key={c.src} src={c.src} alt={c.alt} onError={handleImageError} />
            ))}
          </div>
        </Section>

        <Section title="Produtos em alta" titleAlign="left">
          <ProductListing products={products.slice(0, 8)} />
        </Section>
      </div>
    </Layout>
  );
}
