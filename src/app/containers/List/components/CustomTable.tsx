import React, { memo } from 'react';
import { Table } from 'antd';

const CustomTable = ({ dataSource, columns }) => {
  return (
    <Table
      size="small"
      rowKey={record => record.index}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default memo(CustomTable);
