# Store

Projeto final de Front-end (React): loja virtual com Home, Listagem de Produtos e Visualização de Produto.

**Equipe:** _Nome 1_, _Nome 2_, _Nome 3_ <!-- obrigatório informar todos os nomes -->
**Deploy:** _cole aqui o link da Vercel/Netlify_

## Tecnologias
React 18, React Router DOM 6, Vite e CSS puro (sem biblioteca de estilos).

## Como rodar
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a pasta dist
npm run preview  # testa o build localmente
```
Requer Node 18+.

## Imagens (importante)
Copie a pasta `public/` do [repositório base](https://github.com/digitalcollegebr/projeto-digital-store)
para dentro da pasta `public/` deste projeto. Os arquivos usados são:
`home-slide-N.jpeg`, `collection-1..3.png`, `product-thumb-N.png` e `product-image-N.png`.
Se algum arquivo não existir, um placeholder cinza é exibido no lugar.

## Rotas
| Rota | Página |
| --- | --- |
| `/` | Home |
| `/products` (e `/produtos`) | Listagem, aceita `?filter=termo` |
| `/product/:id` | Visualização do produto |

## Estrutura
```
src/
├── components/  Header, Footer, FooterInfo, Logo, Icons, Section, ProductCard,
│                ProductListing, Gallery, FilterGroup, ProductOptions, BuyBox
├── pages/       Layout, HomePage, ProductListingPage, ProductViewPage, NotFoundPage
├── data/        products.js (dados mockados)
├── utils/       helpers.js (preço, tamanhos CSS, busca sem acento, fallback de imagem)
├── App.jsx      Rotas
└── main.jsx
```

## Funcionalidades
- Busca no cabeçalho (lupa ou Enter) que leva a `/products?filter=...`
- Galeria com setas, miniaturas e botões desabilitados nas pontas
- Listagem com ordenação por preço e filtros por marca, categoria, gênero e estado
- Seleção de tamanho e cor na página do produto
- Deploy-ready: `vercel.json` e `public/_redirects` evitam 404 ao recarregar uma rota
