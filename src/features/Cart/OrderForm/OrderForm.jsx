import React from 'react';
import { Button, Form, Input } from 'antd';
import Title from '../../../components/Title/Title';

import './OrderForm.scss';

const OrderForm = ({ totalPrice }) => {

    const onFinish = (values) => {
        console.log('Success:', { ...values, totalPrice });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='orderForm'>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
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
                    name="Телефон"
                    label="phone"
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