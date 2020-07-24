import React, { memo } from 'react';
import { Row, Col, Tooltip } from 'antd';
import numeral from 'numeral';
import { InfoCircleOutlined } from '@ant-design/icons/lib';

import ChartCard from 'app/components/Charts/ChartCard';
import Field from 'app/components/Charts/Field';
import Trend from 'app/components/Trend';
import MiniArea from 'app/components/Charts/MiniArea';
import MiniBar from 'app/components/Charts/MiniBar';
import MiniProgress from 'app/components/Charts/MiniProgress';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

const IntroduceRow = () => {
  return (
    <Row gutter={24}>
      <Col span={6} {...topColResponsiveProps}>
        <ChartCard
          title="Total Sales"
          action={
            <Tooltip title="Introduce">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(126560).format('0,0')}
          footer={
            <Field
              label={'Daily Sales'}
              value={`$ ${numeral(12423).format('0,0')}`}
            />
          }
        >
          <Trend flag="up">
            <span>Weekly Changes </span>
            <span className="trendText">12%</span>
          </Trend>
          <Trend flag="down">
            <span>Daily Changes </span>
            <span className="trendText">11%</span>
          </Trend>
        </ChartCard>
      </Col>
      <Col span={6} {...topColResponsiveProps}>
        <ChartCard
          title="Visits"
          action={
            <Tooltip title="Introduce">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(8846).format('0,0')}
          footer={
            <Field label={'Daily Sales'} value={numeral(1234).format('0,0')} />
          }
        >
          <MiniArea />
        </ChartCard>
      </Col>

      <Col span={6} {...topColResponsiveProps}>
        <ChartCard
          title="Payments"
          action={
            <Tooltip title="Introduce">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(6560).format('0,0')}
          footer={<Field label={'Conversion Rate'} value="60%" />}
        >
          <MiniBar />
        </ChartCard>
      </Col>

      <Col span={6} {...topColResponsiveProps}>
        <ChartCard
          title="Operational Effect"
          action={
            <Tooltip title="Introduce">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total="78%"
          footer={
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
              <Trend flag="up">
                <span>Weekly Changes </span>
                <span className="trendText">12%</span>
              </Trend>
              <Trend flag="down">
                <span>Daily Changes </span>
                <span className="trendText">11%</span>
              </Trend>
            </div>
          }
        >
          <MiniProgress
            percent={78}
            strokeWidth={8}
            target={80}
            targetLabel={`Valor alvo 80%`}
            color="#13C2C2"
          />
        </ChartCard>
      </Col>
    </Row>
  );
};

export default memo(IntroduceRow);
