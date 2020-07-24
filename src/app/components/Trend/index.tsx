import React, { memo } from 'react';
import './index.less';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons/lib';

const Trend = ({
  colorful = true,
  reverseColor = false,
  flag,
  children,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className="trendItem"
      title={typeof children === 'string' ? children : ''}
    >
      <span>{children}</span>
      {flag === 'up' ? (
        <CaretUpOutlined className="up" />
      ) : (
        <CaretDownOutlined className="down" />
      )}
    </div>
  );
};

export default memo(Trend);
