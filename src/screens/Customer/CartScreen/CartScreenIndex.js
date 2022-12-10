import React from 'react';
import CartScreen from './CartScreen';
import {useSelector} from 'react-redux';

export default function CartScreenIndex() {
  const {cart} = useSelector(state => state.cart);

  return <CartScreen cart={cart} />;
}
