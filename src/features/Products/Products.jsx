import React from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from 'antd';
import Title from '../../components/Title/Title';
import Product from '../Products/Product/Product';

import './Products.scss';

const Products = () => {
  // const [currentPage, setCurrentPage] = React.useState(1);

  const { productsList } = useSelector(state => state.products);

  // const handlePageChange = page => {
  //   console.log(page);
  //   setCurrentPage(page);
  // };

  // console.log(productsList);

  return (
    <div className='products'>
      {!!productsList.length
        ? productsList.map((product, i) => <Product key={i} product={product}/>)
        : <Title level={2}>Выберите бренд</Title>
      }
      {/* {productsList.length > 6 && <Pagination pageSize={6} current={currentPage} total={productsList.length} onChange={handlePageChange} />} */}
    </div>
  );
};

export default Products;