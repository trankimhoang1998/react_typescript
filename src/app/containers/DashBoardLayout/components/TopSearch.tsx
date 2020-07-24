import React, { memo } from 'react';
import { Row, Col, Table, Tooltip, Card } from 'antd';
import numeral from 'numeral';
import Trend from 'app/components/Trend';
import NumberInfo from 'app/components/NumberInfo';
import {
  InfoCircleOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from '@ant-design/icons/lib';
import MiniArea from 'app/components/Charts/MiniArea';

const columns: any[] = [
  {
    title: 'Rank',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Search keyword',
    dataIndex: 'keyword',
    key: 'keyword',
    render: text => <a href="/">{text}</a>,
  },
  {
    title: 'Users',
    dataIndex: 'count',
    key: 'count',
    sorter: (a, b) => a.count - b.count,
    className: 'alignRight',
  },
  {
    title: 'Weekly Range',
    dataIndex: 'range',
    key: 'range',
    sorter: (a, b) => a.range - b.range,
    render: (text, record) => (
      <Trend flag={record.status === 1 ? 'down' : 'up'}>
        <span style={{ marginRight: 4 }}>{text}%</span>
      </Trend>
    ),
    align: 'right',
  },
];

const TopSearch = ({ searchData }) => {
  return (
    <Card bordered={false} title="Online Top Search" style={{ marginTop: 24 }}>
      <Row gutter={68}>
        <Col sm={12} xs={24} style={{ marginBottom: 24 }}>
          <NumberInfo
            subTitle={
              <span>
                <span>Search Users</span>
                <Tooltip title={'Introduce'}>
                  <InfoCircleOutlined />
                </Tooltip>
              </span>
            }
            gap={8}
            total={numeral(12321).format('0,0')}
            status={<CaretUpOutlined />}
            subTotal={17.1}
          />
          <MiniArea />
        </Col>
        <Col sm={12} xs={24} style={{ marginBottom: 24 }}>
          <NumberInfo
            subTitle={
              <span>
                <span>Per Capita Search</span>
                <Tooltip title={'Introduce'}>
                  <InfoCircleOutlined />
                </Tooltip>
              </span>
            }
            gap={8}
            total={2.7}
            status={<CaretDownOutlined />}
            subTotal={26.2}
          />
          <MiniArea />
        </Col>
      </Row>
      <Table
        rowKey={record => record.index}
        size="small"
        columns={columns}
        dataSource={searchData}
        pagination={{
          style: { marginBottom: 0 },
          pageSize: 5,
        }}
      />
    </Card>
  );
};

export default memo(TopSearch);
