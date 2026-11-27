import { StarIcon } from './Icons.jsx';
import { formatPrice } from '../utils/helpers.js';
import './BuyBox.css';

// Props: name, reference, stars, rating, price, priceDiscount, description, children, onBuy
export default function BuyBox({ name, reference, stars, rating, price, priceDiscount, description, children, onBuy }) {
  const hasDiscount = priceDiscount != null;

  return (
    <div className="buy-box">
      <h1 className="buy-box__name">{name}</h1>
      {reference && <p className="buy-box__reference">Ref: {reference}</p>}

      {(stars != null || rating != null) && (
        <div className="buy-box__rating">
          {stars != null && (
            <span className="buy-box__stars">
              {stars} <StarIcon width={14} height={14} />
            </span>
          )}
          {rating != null && <span className="buy-box__count">({rating} avaliações)</span>}
        </div>
      )}

      <p className="buy-box__prices">
        {hasDiscount && <span className="buy-box__price buy-box__price--old">{formatPrice(price)}</span>}
        <span className="buy-box__price">{formatPrice(hasDiscount ? priceDiscount : price)}</span>
      </p>

      {description && (
        <div className="buy-box__description">
          <h2>Descrição do produto</h2>
          <p>{description}</p>
        </div>
      )}

      {children}

      <button type="button" className="buy-box__cta" onClick={onBuy}>COMPRAR</button>
    </div>
  );
}
