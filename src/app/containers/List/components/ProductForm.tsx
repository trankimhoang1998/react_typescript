import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../Product/slice';
import {
  Col,
  Row,
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
} from 'antd';
import { useHistory } from 'react-router';
import PrefixSelector from './PrefixSelector';

const { RangePicker } = DatePicker;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
    string: '${label} is not validate quantity!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const ProductForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onCancel = () => {
    history.goBack();
  };

  const onSubmit = values => {
    console.log('Success:', values);
    dispatch(actions.createNewProduct({ ...values }));
  };

  return (
    <Card title="Add Product">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onSubmit}
        validateMessages={validateMessages}
      >
        <Form.Item
          labelAlign="left"
          name={['product', 'name']}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          labelAlign="left"
          name={['product', 'description']}
          label="Description"
          rules={[{ required: true, type: 'string' }]}
        >
          <Input.TextArea autoSize={{ minRows: 2, maxRows: 6 }} />
        </Form.Item>
        <Form.Item
          labelAlign="left"
          name={['product', 'quantity']}
          label="Quantity"
          rules={[
            {
              required: true,
              type: 'number',
              min: 0,
              max: 1000,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          labelAlign="left"
          name={['product', 'producer']}
          label="Producer"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          labelAlign="left"
          name={['product', 'phone']}
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input addonBefore={<PrefixSelector />} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          labelAlign="left"
          name={['product', 'rangeDate']}
          label="Date of Manufacture / Expiry Date"
        >
          <RangePicker />
        </Form.Item>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              type="default"
              onClick={onCancel}
              style={{ margin: '0 10px' }}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default memo(ProductForm);
