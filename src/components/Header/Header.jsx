import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import './Header.scss';

const Header = () => {

    const { cartItems } = useSelector(state => state.cart);
    const navigate = useNavigate();

    const { Title } = Typography;
    const { Header } = Layout;

    const inToCart = () => {
        navigate('/cart');
    };

    return (
        <Layout>
            <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Title style={{ color: 'white', margin: '0px' }}>Shop</Title>
                <div onClick={inToCart} className='cartLink'>
                    <ShoppingCartOutlined style={{ fontSize: '50px', color: 'white' }} />
                    <div className="cartLink__count">
                        <p>{cartItems.length}</p>
                    </div>
                </div>
            </Header>
        </Layout>
    );
};

export default Header;