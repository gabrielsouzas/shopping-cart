import React from 'react';

import './ProductCard.css';
import { BsFillCartPlusFill } from 'react-icons/bs';

function ProductCard() {
  return (
    <section className="product-card">
      
      <img 
        src="https://http2.mlstatic.com/D_910401-MLA46545868460_062021-W.jpg" 
        alt="product" 
        className="card__image" />

      <div className="card__infos">
        <h2 className="card__price">R$ 200.00</h2>
        <h2 className="card__title">Manual do Dev</h2>
      </div>

      <button type="button" className="button__add-cart">
        <BsFillCartPlusFill />
      </button>

    </section>
  );
}

export default ProductCard;
