import React, { useEffect, useContext } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Products() {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);
  

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
