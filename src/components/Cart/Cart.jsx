import React, { useContext } from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {
  const { cartItens, isCartVisible } = useContext(AppContext);

  /* Função para calcular o total dos valores do carrinho
     Utilizando a função reduce, que percorre um array e guarda um valor em um acumulador a cada iteração*/
  const totalPrice = cartItens.reduce((acc, item) => item.price + acc, 0/*VALOR INICIAL*/);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-itens">
        { cartItens.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Cart;
