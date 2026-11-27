const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
export const formatPrice = (value) => brl.format(value);

// A documentação mostra width="1440" (sem unidade) e width="700px" (com unidade).
// Aqui aceitamos número, "1440" ou "700px" e sempre devolvemos CSS válido.
export const toCssSize = (value) => {
  if (value == null || value === '') return undefined;
  if (typeof value === 'number' || /^\d+(\.\d+)?$/.test(value)) return `${value}px`;
  return value;
};

// Remove acentos e caixa para a busca ("Tênis" encontra "tenis")
export const normalizeText = (text) =>
  String(text).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

const placeholderSvg =
  "<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'>" +
  "<rect width='600' height='600' fill='#F5F5F5'/>" +
  "<text x='50%' y='50%' fill='#8F8F8F' font-family='sans-serif' font-size='28' " +
  "text-anchor='middle' dominant-baseline='middle'>Imagem indisponível</text></svg>";

export const PLACEHOLDER_IMAGE = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(placeholderSvg)}`;

// Use em <img onError={handleImageError} />: evita ícone de imagem quebrada
// caso algum arquivo da pasta public não exista (e evita loop infinito).
export function handleImageError(event) {
  const img = event.currentTarget;
  if (img.src !== PLACEHOLDER_IMAGE) img.src = PLACEHOLDER_IMAGE;
}
