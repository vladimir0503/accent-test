import React from 'react';
import Title from '../../../components/Title/Title'
import { Avatar, List, Button } from 'antd';

import './CartList.scss';

const CartList = ({ items, handleAddItem, handleDeleteItem }) => {

    const orderedList = Object.values(items.reduce((acc, item) => {
        const id = item.id;
        if (!acc[id]) {
            acc[id] = [];
        };
        acc[id].push(item);
        return acc;
    }, {}));

    const getItemTotalPrice = arr => {
        return arr.reduce((sum, { regular_price }) => {
            return sum + regular_price.value
        }, 0);
    };

    return (
        <div className='cartList'>
            <List
                pagination={{
                    position: 'bottom',
                    align: 'start',
                    defaultPageSize: 6
                }}
                dataSource={orderedList}
                renderItem={(item, index) => (
                    <>
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src={item[0].image} />
                                }
                                title={<Title level={5}>{item[0].title}</Title>}
                                description={`${getItemTotalPrice(item)} ${item[0].regular_price.currency}`}
                            />
                            <div className='cartList__buttons-block'>
                                <Button onClick={() => handleDeleteItem(item[0].id)} type="primary" danger>-</Button>
                                <Title level={4}>{item.length}</Title>
                                <Button onClick={() => handleAddItem(item[0])} type="primary">+</Button>
                            </div>
                        </List.Item>
                    </>
                )}
            />
        </div>
    );
};

export default CartList;