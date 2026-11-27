import { useState } from 'react';
import './ProductOptions.css';

// Props: options ["39","40"] ou ["#000","#fff"], shape ("square" | "circle"),
// type ("text" | "color"), radius (usado só no square), label, onChange(option, index)
export default function ProductOptions({ options = [], radius = '4px', shape = 'square', type = 'text', label, onChange }) {
  // Seleciona pelo ÍNDICE: o exemplo da doc tem cores repetidas (["#111", "#111"])
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (option, i) => {
    setSelectedIndex(i);
    onChange?.(option, i);
  };

  return (
    <div className="product-options" role="group" aria-label={label}>
      {options.map((option, i) => {
        const isCircle = shape === 'circle';
        const isColor = type === 'color';
        const style = {
          borderRadius: isCircle ? '50%' : radius,
          ...(isColor ? { backgroundColor: option } : {}),
        };

        return (
          <button
            key={`${option}-${i}`}
            type="button"
            style={style}
            className={[
              'product-option',
              `product-option--${isCircle ? 'circle' : 'square'}`,
              `product-option--${isColor ? 'color' : 'text'}`,
              i === selectedIndex ? 'is-selected' : '',
            ].join(' ')}
            aria-pressed={i === selectedIndex}
            aria-label={isColor ? `Cor ${option}` : `Opção ${option}`}
            onClick={() => handleSelect(option, i)}
          >
            {isColor ? null : option}
          </button>
        );
      })}
    </div>
  );
}
