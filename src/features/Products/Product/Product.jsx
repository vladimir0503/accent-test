import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'antd';
import { addItems, deleteItems } from '../../Cart/cartSlice';
import Title from '../../../components/Title/Title'

import './Product.scss';

const Product = ({ product }) => {
    const { image, title, regular_price: { value, currency }, id } = product;
    const { cartItems } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItems(product));
    };

    const getQuantity = id => {
        const quantity = cartItems.length ? cartItems.filter(item => item.id === id).length : 0;
        return quantity;
    };

    const removeFromCart = () => {
        dispatch(deleteItems({id, value}));
    };

    return (
        <div className='product'>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src={image} />}
                actions={[
                    <Button type="primary" onClick={removeFromCart}>-</Button>,
                    <Title level={4}>{getQuantity(id)}</Title>,
                    <Button type="primary" onClick={addToCart}>+</Button>
                ]}
            >
                <Card.Meta title={title} description={`${value} ${currency}`} />
            </Card>
        </div>
    );
};

export default Product;