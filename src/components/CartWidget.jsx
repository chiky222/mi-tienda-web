import React, { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

  const {totalUnidades} = useContext(CartContext);

  return (
    <div className={totalUnidades() !== 0 ? 'widget-nav' : 'hide'}>
        <h4>{totalUnidades() !== 0 && totalUnidades()}</h4>
        <FiShoppingCart className={totalUnidades() !== 0 ? 'cart-ico' : 'hide'} />
    </div>
  )
}

export default CartWidget;