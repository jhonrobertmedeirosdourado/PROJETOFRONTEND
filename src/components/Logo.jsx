// Doc: 253 x 44 px. Para usar a imagem oficial do Figma/assets, troque o <svg>
// por <img src="/logo.svg" width={253} height={44} alt="Store" />.
export default function Logo({ variant = 'default', width = 253, height = 44 }) {
  const isWhite = variant === 'white';
  const color = isWhite ? '#FFFFFF' : '#C92071';
  const letter = isWhite ? '#1F1F1F' : '#FFFFFF';

  return (
    <svg
      role="img"
      aria-label="Store"
      width={width}
      height={height}
      viewBox="0 0 253 44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="6" width="32" height="32" rx="8" fill={color} />
      <text x="16" y="29" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="20" fill={letter}>S</text>
      <text x="44" y="31" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="26" fill={color}>Store</text>
    </svg>
  );
}
