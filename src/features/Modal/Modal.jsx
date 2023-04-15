import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleModal } from './modalSlice';
import { clearCart } from '../Cart/cartSlice';
import { Modal as ModalElem } from 'antd';

const Modal = () => {
    const { isActive } = useSelector(state => state.modal);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOk = () => {
        dispatch(toggleModal(false));
        dispatch(clearCart());
        navigate('/');
    };

    return (
        <>
            <ModalElem title="Внимание!" open={isActive} onOk={handleOk} onCancel={handleOk}>
                <p>Заказ успешно оформлен!</p>
            </ModalElem>
        </>
    );
};

export default Modal;