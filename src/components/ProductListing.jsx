import ProductCard from './ProductCard.jsx';
import './ProductListing.css';

// Props: products = [{ id?, name, image, price, priceDiscount? }]
export default function ProductListing({ products = [] }) {
  if (products.length === 0) {
    return <p className="product-listing__empty">Nenhum produto encontrado.</p>;
  }

  return (
    <div className="product-listing">
      {products.map((product) => (
        <ProductCard
          key={product.id ?? product.name}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
}
