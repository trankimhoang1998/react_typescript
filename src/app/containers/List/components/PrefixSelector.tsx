import React, { memo } from 'react';
import { Form } from 'antd';
import { Select } from 'antd';

const { Option } = Select;

const PrefixSelector = () => {
  return (
    <Form.Item name={['product', 'prefix']} noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
};

export default memo(PrefixSelector);
