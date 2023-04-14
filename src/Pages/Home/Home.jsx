import React from 'react';
import BrandList from '../../features/BrandList/BrandList';
import Products from '../../features/Products/Products';

import './Home.scss';

const Home = () => {

    return (
        <div className='home'>
            <BrandList />
            <Products />
        </div>
    );
};

export default Home;