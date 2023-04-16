import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Title from '../Title/Title'

import './Header.scss';

const Header = () => {

    const { cartItems } = useSelector(state => state.cart);
    const navigate = useNavigate();

    const { Header } = Layout;

    const inToCart = () => {
        navigate('/cart');
    };

    return (
        <Layout>
            <Header className='header' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className='header__content'>
                    <Title level={1}>Shop</Title>
                    <div onClick={inToCart} className='header__content__cartLink'>
                        <ShoppingCartOutlined style={{ fontSize: '50px', color: 'white' }} />
                        <div className="header__content__cartLink_count">
                            <p>{cartItems.length}</p>
                        </div>
                    </div>
                </div>
            </Header>
        </Layout>
    );
};

export default Header;