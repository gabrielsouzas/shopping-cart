import React, { useEffect, useState } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
    });

  }, []);

  return (
    <section className="products container">
      {/* Para cada produto retornado da busca da API vai criar um ProductCard passando os dados como props */}
      {
        products.map((product) => <ProductCard key={product.id} data={product} />)
      }

    </section>
  );
}

export default Products;
