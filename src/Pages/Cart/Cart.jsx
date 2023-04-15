import React from 'react';
import CartList from '../../features/Cart/CartList/CartList';
import OrderForm from '../../features/Cart/OrderForm/OrderForm';
import { useSelector, useDispatch } from 'react-redux';
import { addItems, deleteItems } from '../../features/Cart/cartSlice';

import './Cart.scss';

const Cart = () => {

    const { cartItems, totalPrice } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const deleteCartItem = id => {
        dispatch(deleteItems(id));
    };

    const addCartItem = item => {
        dispatch(addItems(item));
    };

    return (
        <div className='cart'>
            <OrderForm totalPrice={totalPrice}/>
            <CartList
                items={cartItems}
                handleAddItem={addCartItem}
                handleDeleteItem={deleteCartItem}
            />
        </div>
    );
};

export default Cart;