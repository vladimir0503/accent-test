import React from 'react';
import { Layout, Button, Typography } from 'antd';

const Header = () => {

    const { Title } = Typography;
    const { Header } = Layout;

    return (
        <Layout className="layout">
            <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Title style={{ color: 'white', margin: '0px' }}>Shop</Title>
                {/* <Button onClick={exit}>Выйти</Button> */}
            </Header>
        </Layout>
    );
};

export default Header;