import React from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from 'antd';
import Title from '../../components/Title/Title';
import Product from '../Products/Product/Product';

import './Products.scss';

const Products = () => {

  const { productsList } = useSelector(state => state.products);

  console.log(productsList);

  return (
    <div className='products'>
      {!!productsList.length
        ? productsList.map((product, i) => <Product key={i} {...product} />)
        : <Title level={2}>Выберите бренд</Title>
      }
      {productsList.length > 6 && <Pagination defaultCurrent={1} total={50} />}
    </div>
  );
};

export default Products;