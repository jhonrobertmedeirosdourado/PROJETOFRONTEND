const DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.';

// Imagens: public/product-thumb-1.png ... product-thumb-8.png (repositório base)
const make = (id, name, price, priceDiscount, brand, category, gender, condition) => ({
  id,
  name,
  image: `/product-thumb-${((id - 1) % 8) + 1}.png`,
  price,
  ...(priceDiscount ? { priceDiscount } : {}),
  brand,
  category,
  gender,
  condition,
  reference: `REF-${String(id).padStart(5, '0')}`,
  stars: 4.5,
  rating: 90 + id,
  description: DESCRIPTION,
});

export const products = [
  make(1, 'Tênis Nike Air Max 270', 599.9, 499.9, 'Nike', 'Esporte e lazer', 'Masculino', 'Novo'),
  make(2, 'Tênis Adidas Ultraboost', 799.9, null, 'Adidas', 'Corrida', 'Unissex', 'Novo'),
  make(3, 'Tênis Puma Suede Classic', 449.9, 379.9, 'Puma', 'Casual', 'Feminino', 'Novo'),
  make(4, 'Tênis Fila Disruptor', 399.9, null, 'Fila', 'Casual', 'Feminino', 'Usado'),
  make(5, 'Tênis Nike Revolution 6', 349.9, 299.9, 'Nike', 'Corrida', 'Masculino', 'Novo'),
  make(6, 'Tênis Adidas Superstar', 549.9, null, 'Adidas', 'Casual', 'Unissex', 'Usado'),
  make(7, 'Tênis Puma RS-X', 629.9, 529.9, 'Puma', 'Esporte e lazer', 'Masculino', 'Novo'),
  make(8, 'Tênis Fila Racer', 289.9, null, 'Fila', 'Corrida', 'Feminino', 'Novo'),
  make(9, 'Tênis Nike Court Vision', 419.9, 359.9, 'Nike', 'Casual', 'Feminino', 'Novo'),
  make(10, 'Tênis Adidas Duramo', 259.9, null, 'Adidas', 'Corrida', 'Masculino', 'Usado'),
  make(11, 'Tênis Puma Carina', 339.9, 289.9, 'Puma', 'Casual', 'Feminino', 'Novo'),
  make(12, 'Tênis Fila Strada', 379.9, null, 'Fila', 'Esporte e lazer', 'Unissex', 'Novo'),
];

export const getProductById = (id) => products.find((p) => String(p.id) === String(id));
