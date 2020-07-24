import React, { Suspense, memo } from 'react';
import './index.less';
import { Row, Col } from 'antd';
import { searchData } from './assets/mock/chart';

const IntroduceRow = React.lazy(() => import('./components/IntroduceRow'));
const SalesCard = React.lazy(() => import('./components/SalesCard'));
const TopSearch = React.lazy(() => import('./components/TopSearch'));
const ProportionSales = React.lazy(() =>
  import('./components/ProportionSales'),
);

const DashBoardLayout = () => {
  return (
    <Row gutter={16}>
      <Col span={24}>
        <Suspense fallback={null}>
          <IntroduceRow />
        </Suspense>
        <Suspense fallback={null}>
          <SalesCard />
        </Suspense>
        <div className="twoColLayout">
          <Row gutter={24}>
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <Suspense fallback={null}>
                <TopSearch searchData={searchData} />
              </Suspense>
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <Suspense fallback={null}>
                <ProportionSales />
              </Suspense>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default memo(DashBoardLayout);
