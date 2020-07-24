import React, { memo } from 'react';
import { Card } from 'antd';

import './index.less';

const renderTotal = total => {
  let totalDom;
  switch (typeof total) {
    case 'undefined':
      totalDom = null;
      break;
    case 'function':
      totalDom = <div className="total">{total()}</div>;
      break;
    default:
      totalDom = <div className="total">{total}</div>;
  }
  return totalDom;
};

const ChartCard = props => {
  const { title, action, total, footer, children } = props;

  const renderConnect = () => {
    return (
      <div className="chartCard">
        <div className="chartTop">
          <div className="metaWrap">
            <div className="meta">
              <span className="title">{title}</span>
              <span className="action">{action}</span>
            </div>
            {renderTotal(total)}
          </div>
        </div>
        {children && (
          <div className="content">
            <div className="contentChildren">{children}</div>
          </div>
        )}
        {footer && <div className="footer">{footer}</div>}
      </div>
    );
  };

  return (
    <Card bodyStyle={{ padding: '20px 24px 8px 24px' }}>{renderConnect()}</Card>
  );
};

export default memo(ChartCard);
