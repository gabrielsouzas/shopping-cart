import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import AppContext from '../../context/AppContext';

function CartButton() {

  const { cartItens, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className="cart__button"
      onClick={ () => setIsCartVisible(!isCartVisible)}  
    >
      <AiOutlineShoppingCart />
      
      { cartItens.length > 0 && <span className="cart-status">{cartItens.length}</span>}
    </button>
  );
}

export default CartButton;
