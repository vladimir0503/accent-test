import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBrands, toggleChecked, clearCheckbox } from './brandsSlice';
import { fetchProducts, clearProducts, deleteProducts, updateProductsList } from '../Products/ProductsSlice';
import { Checkbox, Button } from 'antd';
import Title from '../../components/Title/Title';

import './BrandList.scss';

const BrandList = () => {

    const dispatch = useDispatch();
    const { brands } = useSelector(state => state.brands);

    const onChange = (e, id) => {
        dispatch(toggleChecked(id));

        if (e.target.checked) {
            dispatch(fetchProducts(id));
        } else {
            dispatch(deleteProducts(id));
        };
    };

    const updateList = () => {
        dispatch(updateProductsList());
    };

    const clear = () => {
        dispatch(clearProducts());
        dispatch(clearCheckbox());
    };

    React.useEffect(() => {
        if (!brands.length) dispatch(fetchBrands());
    }, []);

    return (
        <div className="brandList">
            <Title level={3}>Бренды</Title>
            <ul>
                {brands.map(({ title, id, checked }) => (
                    <li key={id}>
                        <Checkbox
                            checked={checked}
                            onChange={e => onChange(e, id, checked)}
                        >
                            {title}
                        </Checkbox>
                    </li>
                ))}
            </ul>
            <Button onClick={updateList} type="primary">Применить</Button>
            <p onClick={clear}>Сбросить</p>
        </div>
    );
};

export default BrandList;