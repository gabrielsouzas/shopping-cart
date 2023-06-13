import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {

  // Desestruturação da variavel data (props)
  const { id, title, thumbnail, price } = data;

  const { cartItens, setCartItens} = useContext(AppContext);

  // Colocar os dados no carrinho - 1º Método
  /*const handleAddCart = () => {
    const updatedCartItens = cartItens;
    updatedCartItens.push(data);
    setCartItens(updatedCartItens);
  };*/

  // Colocar os dados no carrinho - 2º Método
  //const handleAddCart = () => setCartItens([ ...cartItens, data]);

  // Colocar os dados no carrinho - 3º Método (Com teste de ID)
  const handleAddCart = () => {
    var productRepeated = false;
    const updatedCartItens = cartItens;
    updatedCartItens.map((cartItem) => {
      if (cartItem.id === id) {
        cartItem.quantity ? cartItem.quantity++ : cartItem.quantity = 2;
        cartItem.price = cartItem.price * cartItem.quantity;
        productRepeated = true;
        return;
      }
    });
    productRepeated ? setCartItens(updatedCartItens) : setCartItens([ ...cartItens, data]);
  };

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

      <button 
        type="button" 
        className="button__add-cart"
        onClick={ handleAddCart }  
      >
        <BsFillCartPlusFill />
      </button>

    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
