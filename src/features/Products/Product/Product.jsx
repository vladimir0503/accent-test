import React from 'react';
import { Card } from 'antd';

import './Product.scss';

const Product = ({ title, image, price }) => {

    return (
        <div className='product'>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src={image} />}
            >
                <Card.Meta title={title} description="www.instagram.com" />
            </Card>
        </div>
    )
}

export default Product