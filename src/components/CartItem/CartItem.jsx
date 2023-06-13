import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsCartDashFill } from 'react-icons/bs';

import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function CartItem({ data }) {

  const { cartItens, setCartItens } = useContext(AppContext);
  const { id, thumbnail, title, price, quantity } = data;

  const handleRemoveItem = () => {
    const updatedItens = cartItens.filter((item) => item.id != id);
    setCartItens(updatedItens);
  };

  return (
    <section className="cart-item">
      <img 
        src={thumbnail}
        alt="Imagem do Produto"
        className="cart-item-image" 
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button
          type="button"
          className="button__remove-item"
          onClick={ handleRemoveItem }
        >
          <BsCartDashFill />

          { quantity && <span className="cart-item-status">{quantity}</span> }
        </button>

      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
