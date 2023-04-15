import React from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../Modal/modalSlice';
import Title from '../../../components/Title/Title';
import { API } from '../../../api/api';

import './OrderForm.scss';

const OrderForm = ({ totalPrice }) => {

    const dispatch = useDispatch();

    const onFinish = async values => {
        const { result } = await API.postData({ ...values, totalPrice });
        if (result === 'ok') {
            dispatch(toggleModal(true))
        };
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='orderForm'>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Имя"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Введите имя',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Телефон"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Ведите номер телефона',
                        },
                        {
                            pattern: /^(?:\d*)$/,
                            message: 'Вы должны вводить только цифры',
                        }
                    ]}
                >
                    <Input
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item>
                    <Title level={5}>{`Итого: ${totalPrice} USD`}</Title>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Отправить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default OrderForm;