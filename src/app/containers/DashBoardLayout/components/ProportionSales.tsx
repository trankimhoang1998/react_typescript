import React, { memo } from 'react';
import { Card } from 'antd';
import '../index.less';
import ShapeBarChart from 'app/components/Charts/ShapeBarChart';

const ProportionSales = () => {
  return (
    <Card
      className="salesCard"
      bordered={false}
      title="The Proportion of Sales"
      style={{ marginTop: 24 }}
    >
      <h4 style={{ marginTop: 10, marginBottom: 32 }}>{'Sales'}</h4>
      <ShapeBarChart />
    </Card>
  );
};

export default memo(ProportionSales);
