import React from 'react';
import Title from '../../components/Title/Title';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, List, Radio, Space } from 'antd';

import './CartList.scss';

const CartList = ({ items }) => {

    const { cartItems, totalPrice } = useSelector(state => state.cart);


    return (
        <div className='cart'>
            <List
                // pagination={{
                //     position,
                //     align,
                // }}
                dataSource={items}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <Avatar src={item.image} />
                            }
                            title={<Title level={5}>{item.title}</Title>}
                            description={`${item.regular_price.value} ${item.regular_price.currency}`}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default CartList;