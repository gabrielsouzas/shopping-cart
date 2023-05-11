import React from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';

function ProductCard({ data }) {

  // Desestruturação da variavel data (props)
  const { title, thumbnail, price } = data;

  return (
    <section className="product-card">
      
      {/* src= Regex para substituir "qualquer_letra.jpg" */}
      <img 
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} 
        alt="product" 
        className="card__image" />

      <div className="card__infos">
        {/* price= Formata a string retornada para moeda do Brasil */}
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button type="button" className="button__add-cart">
        <BsFillCartPlusFill />
      </button>

    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
