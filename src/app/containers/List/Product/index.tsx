import React from 'react';
import { Card, Space, Tag } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './index.less';
import RouterPath from 'router/RouterPath';
import CustomTable from '../components/CustomTable';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { actions, reducer, sliceKey } from './slice';
import productFormSaga from './saga';
import { selectUserData } from './selectors';

const Product = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: productFormSaga });
  const history = useHistory();
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const onAddProduct = () => {
    dispatch(actions.actionProduct('add'));
    history.push(RouterPath.LIST_PRODUCT_ADD);
  };

  const onEditProduct = record => {
    console.log(record);
    dispatch(actions.actionProduct('edit'));
    // history.push(RouterPath.LIST_PRODUCT_EDIT);
  };

  const onRemoveProduct = record => {
    console.log(record);
  };
  const columns: any[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => onEditProduct(record)}
          >
            <EditOutlined />
          </span>
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => onRemoveProduct(record)}
          >
            <DeleteOutlined />
          </span>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Card
        bordered={false}
        title="Table List"
        extra={
          <span onClick={onAddProduct}>
            <PlusCircleOutlined
              key="plus"
              style={{ fontSize: '24px', color: '#1890ff' }}
            />
          </span>
        }
      >
        <CustomTable columns={columns} dataSource={userData} />
      </Card>
    </>
  );
};

export default Product;
