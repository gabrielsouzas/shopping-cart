import React from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';

function Cart({ data }) {
  return (
    <section className="cart">
      <div className="cart-itens">
        <CartItem />
      </div>

      <div className="cart-resume">resumo do carrinho</div>
    </section>
  );
}

export default Cart;
