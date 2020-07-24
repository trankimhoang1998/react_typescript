import React, { memo } from 'react';
import { Row, Col, Card, Tabs, DatePicker, Tag } from 'antd';
import numeral from 'numeral';
import '../index.less';
import { SalesCardProps } from '../types';
import Bar from 'app/components/Charts/Bar';
const { RangePicker } = DatePicker;
const { TabPane } = Tabs;

const rankingListData: any[] = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `User Name Tester No.${i}`,
    total: 323234,
  });
}
const SalesCard = (props: SalesCardProps) => {
  return (
    <Card bordered={false} bodyStyle={{ padding: 0 }}>
      <div className="salesCard">
        <Tabs
          type="card"
          tabBarExtraContent={
            <div className="salesExtraWrap">
              <div className="salesExtra">
                <Tag className="today" onClick={() => console.log('today')}>
                  All Day
                </Tag>
                <Tag className={'week'} onClick={() => console.log('week')}>
                  All Week
                </Tag>
                <Tag className={'month'} onClick={() => console.log('month')}>
                  All Month
                </Tag>
                <Tag className={'year'} onClick={() => console.log('year')}>
                  All Year
                </Tag>
              </div>
              <RangePicker style={{ width: 256 }} />
            </div>
          }
          size="large"
          tabBarStyle={{ marginBottom: 24, padding: '0 16px' }}
        >
          <TabPane tab={'Sales'} key="sales">
            <Row>
              <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                <div className="salesBar">
                  <Bar dataKey={'pv'} />
                </div>
              </Col>
              <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                <div className="salesRank">
                  <h4 className="rankingTitle">{'Sales Ranking'}</h4>
                  <ul className="rankingList">
                    {rankingListData.map((item, i) => (
                      <li key={item.title}>
                        <span
                          className={`rankingItemNumber ${
                            i < 3 ? 'active' : ''
                          }`}
                        >
                          {i + 1}
                        </span>
                        <span className="rankingItemTitle" title={item.title}>
                          {item.title}
                        </span>
                        <span className="rankingItemValue">
                          {numeral(item.total).format('0,0')}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab={'Visits'} key="views">
            <Row>
              <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                <div className="salesBar">
                  <Bar dataKey={'uv'} />
                </div>
              </Col>
              <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                <div className="salesRank">
                  <h4 className="rankingTitle">{'Visits Trend'}</h4>
                  <ul className="rankingList">
                    {rankingListData.map((item, i) => (
                      <li key={item.title}>
                        <span
                          className={`rankingItemNumber ${
                            i < 3 ? 'active' : ''
                          }`}
                        >
                          {i + 1}
                        </span>
                        <span className="rankingItemTitle" title={item.title}>
                          {item.title}
                        </span>
                        <span className="rankingItemValue">
                          {numeral(item.total).format('0,0')}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </Card>
  );
};

export default memo(SalesCard);
