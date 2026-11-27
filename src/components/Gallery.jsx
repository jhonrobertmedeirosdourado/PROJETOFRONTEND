import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from './Icons.jsx';
import { toCssSize, handleImageError } from '../utils/helpers.js';
import './Gallery.css';

// Props: images [{ src }], width, height, radius, showThumbs, className
export default function Gallery({ images = [], width, height, radius = '0px', showThumbs = false, className = '' }) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  // Protege caso a lista de imagens diminua e o índice fique fora do limite
  const current = Math.min(index, images.length - 1);
  const isFirst = current === 0;
  const isLast = current === images.length - 1;
  const cssRadius = toCssSize(radius);

  return (
    <div className={`gallery ${className}`.trim()} style={{ maxWidth: toCssSize(width) }}>
      <div
        className="gallery__viewport"
        style={{ '--gallery-height': toCssSize(height), borderRadius: cssRadius }}
      >
        <div className="gallery__track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((image, i) => (
            <img
              key={`${image.src}-${i}`}
              className="gallery__slide"
              src={image.src}
              alt={`Imagem ${i + 1} de ${images.length}`}
              onError={handleImageError}
              aria-hidden={i !== current}
            />
          ))}
        </div>

        <button
          type="button"
          className="gallery__arrow gallery__arrow--left"
          onClick={() => setIndex(current - 1)}
          disabled={isFirst}
          aria-label="Imagem anterior"
        >
          <ArrowLeftIcon />
        </button>
        <button
          type="button"
          className="gallery__arrow gallery__arrow--right"
          onClick={() => setIndex(current + 1)}
          disabled={isLast}
          aria-label="Próxima imagem"
        >
          <ArrowRightIcon />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery__thumbs">
          {images.map((image, i) => (
            <button
              key={`thumb-${image.src}-${i}`}
              type="button"
              className={`gallery__thumb ${i === current ? 'is-selected' : ''}`}
              style={{ borderRadius: cssRadius }}
              onClick={() => setIndex(i)}
              aria-label={`Ver imagem ${i + 1}`}
              aria-current={i === current}
            >
              <img src={image.src} alt="" width={117} height={95} onError={handleImageError} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
