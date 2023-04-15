import React from 'react';
import CartList from '../../features/Cart/CartList';
import { useSelector, useDispatch } from 'react-redux';

import './Cart.scss';

const Cart = () => {

    const { cartItems, totalPrice } = useSelector(state => state.cart);

    return (
        <div className='cart'>
            <CartList items={cartItems} totalPrice={totalPrice} />
        </div>
    );
};

export default Cart;