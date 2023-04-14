import React from 'react';
import { Typography } from 'antd';

const Title = ({ level, children }) => (
    <Typography.Title level={level}>{children}</Typography.Title>
);

export default Title;