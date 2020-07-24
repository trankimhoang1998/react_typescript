import React, { memo } from 'react';
import './index.less';
import { NumberInfoProps } from './types';

const NumberInfo = ({
  subTitle,
  total,
  subTotal,
  status,
  gap,
}: NumberInfoProps) => {
  return (
    <div className="styles.numberInfo">
      {subTitle && (
        <div
          className="numberInfoSubTitle"
          title={typeof subTitle === 'string' ? subTitle : ''}
        >
          {subTitle}
        </div>
      )}
      <div className="numberInfoValue" style={{ marginTop: gap }}>
        <span className="suffix">{total}</span>
        {(status || subTotal) && (
          <span className="subTotal">
            {/*{total}*/}
            {status && status}
          </span>
        )}
      </div>
    </div>
  );
};

export default memo(NumberInfo);
