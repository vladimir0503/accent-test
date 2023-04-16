import React from 'react';
import { useSelector } from 'react-redux';
import { Pagination, List } from 'antd';
import Title from '../../components/Title/Title';
import Product from '../Products/Product/Product';

import './Products.scss';

const Products = () => {

  const { productsList } = useSelector(state => state.products);

  return (
    <div className='products'>
      {!!productsList.length
        ? <List
          grid={{ gutter: 16, column: window.innerWidth > 1100 ? 3 : 1 }}
          pagination={{
            position: 'top',
            align: 'start',
            pageSize: 6
          }}
          dataSource={productsList}
          renderItem={(item, index) => (
            <Product key={index} product={item} />
          )}
        />
        : <Title level={2}>Выберите бренд</Title>
      }
    </div>
  );
};

export default Products;