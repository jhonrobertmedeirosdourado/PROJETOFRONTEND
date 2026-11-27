import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from './Layout.jsx';
import Section from '../components/Section.jsx';
import ProductListing from '../components/ProductListing.jsx';
import FilterGroup from '../components/FilterGroup.jsx';
import { products } from '../data/products.js';
import { normalizeText } from '../utils/helpers.js';
import './ProductListingPage.css';

const FILTER_GROUPS = [
  { key: 'brand', title: 'Marca', inputType: 'checkbox', options: ['Adidas', 'Fila', 'Nike', 'Puma'] },
  { key: 'category', title: 'Categoria', inputType: 'checkbox', options: ['Casual', 'Corrida', 'Esporte e lazer'] },
  { key: 'gender', title: 'Gênero', inputType: 'checkbox', options: ['Masculino', 'Feminino', 'Unissex'] },
  { key: 'condition', title: 'Estado', inputType: 'radio', options: ['Novo', 'Usado'] },
];

const INITIAL_FILTERS = { brand: [], category: [], gender: [], condition: '' };
const finalPrice = (p) => p.priceDiscount ?? p.price; // ordena pelo preço que o cliente paga

export default function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('filter') ?? '').trim();

  const [sort, setSort] = useState('');
  const [selected, setSelected] = useState(INITIAL_FILTERS);

  const handleChange = (group, inputType, value) => {
    setSelected((prev) => {
      if (inputType === 'radio') return { ...prev, [group]: value };
      const list = prev[group];
      return { ...prev, [group]: list.includes(value) ? list.filter((v) => v !== value) : [...list, value] };
    });
  };

  const visibleProducts = useMemo(() => {
    const list = products.filter((p) => {
      if (query && !normalizeText(p.name).includes(normalizeText(query))) return false;
      if (selected.brand.length && !selected.brand.includes(p.brand)) return false;
      if (selected.category.length && !selected.category.includes(p.category)) return false;
      if (selected.gender.length && !selected.gender.includes(p.gender)) return false;
      if (selected.condition && p.condition !== selected.condition) return false;
      return true;
    });
    // "list" já é uma cópia (filter), então ordenar aqui não altera o array original
    if (sort === 'asc') list.sort((a, b) => finalPrice(a) - finalPrice(b));
    if (sort === 'desc') list.sort((a, b) => finalPrice(b) - finalPrice(a));
    return list;
  }, [query, selected, sort]);

  const total = visibleProducts.length;
  const title = `${total} ${total === 1 ? 'produto encontrado' : 'produtos encontrados'}`;

  return (
    <Layout>
      <div className="container listing">
        <aside className="listing__sidebar">
          <div className="listing__sort">
            <label htmlFor="sort">Ordenar por</label>
            <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="">Mais relevantes</option>
              <option value="asc">Menor preço</option>
              <option value="desc">Maior preço</option>
            </select>
          </div>

          <div className="listing__filters">
            <h2>Filtrar por</h2>
            <hr />
            {FILTER_GROUPS.map(({ key, title: groupTitle, inputType, options }) => (
              <FilterGroup
                key={key}
                name={key}
                title={groupTitle}
                inputType={inputType}
                options={options.map((text) => ({ text }))}
                selected={selected[key]}
                onChange={(value) => handleChange(key, inputType, value)}
              />
            ))}
          </div>
        </aside>

        <div className="listing__content">
          <Section title={title} titleAlign="left">
            {query && <p className="listing__query">Resultados para “{query}”</p>}
            <ProductListing products={visibleProducts} />
          </Section>
        </div>
      </div>
    </Layout>
  );
}
