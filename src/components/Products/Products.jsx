import React, { useEffect, useState } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';

function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });

  }, []);

  /* Se o loading for verdadeiro renderiza o Componete Loading */
  return (
    (loading && <Loading />) || (
      <section className="products container">
        {/* Para cada produto retornado da busca da API vai criar um ProductCard passando os dados como props */}
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    )
  );
}

export default Products;
