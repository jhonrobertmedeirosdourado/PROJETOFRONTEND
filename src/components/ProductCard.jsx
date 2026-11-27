import { Link } from 'react-router-dom';
import { formatPrice, handleImageError } from '../utils/helpers.js';
import './ProductCard.css';

// Props: image, name, price, priceDiscount (opcional) e id (opcional, gera o link)
export default function ProductCard({ id, image, name, price, priceDiscount }) {
  const hasDiscount = priceDiscount != null;

  const content = (
    <>
      <img className="product-card__image" src={image} alt={name} width={292} height={321} onError={handleImageError} loading="lazy" />
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__prices">
        {hasDiscount ? (
          <>
            <span className="product-card__price product-card__price--old">{formatPrice(price)}</span>
            <span className="product-card__price">{formatPrice(priceDiscount)}</span>
          </>
        ) : (
          <span className="product-card__price">{formatPrice(price)}</span>
        )}
      </p>
    </>
  );

  return id != null ? (
    <Link to={`/product/${id}`} className="product-card">{content}</Link>
  ) : (
    <div className="product-card">{content}</div>
  );
}
