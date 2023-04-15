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

    return (
        <div className='cart'>
            {
                Boolean(orderedList.length)
                    ? <List
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
                                        description={`${item[0].regular_price.value} ${item[0].regular_price.currency}`}
                                    />
                                    <div className='cart__buttons-block'>
                                        <Button onClick={() => handleDeleteItem(item[0].id)} type="primary" danger>-</Button>
                                        <Title level={4}>{item.length}</Title>
                                        <Button onClick={() => handleAddItem(item[0])} type="primary">+</Button>
                                    </div>
                                </List.Item>
                            </>
                        )}
                    />
                    : <Title level={1}>Корзина пуста</Title>
            }
        </div>
    );
};

export default CartList;