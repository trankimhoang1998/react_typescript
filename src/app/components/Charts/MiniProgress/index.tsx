import React, { memo } from 'react';
import { Tooltip } from 'antd';
import './index.less';

const MiniProgress = ({
  targetLabel,
  target,
  color = 'rgb(19, 194, 194)',
  strokeWidth,
  percent,
}) => {
  return (
    <div className="miniProgress">
      <Tooltip title={targetLabel}>
        <div className="target" style={{ left: target ? `${target}%` : '' }}>
          <span style={{ backgroundColor: color || '' }} />
          <span style={{ backgroundColor: color || '' }} />
        </div>
      </Tooltip>
      <div className="progressWrap">
        <div
          className="progress"
          style={{
            backgroundColor: color || '',
            width: percent ? `${percent}%` : '',
            height: strokeWidth || '',
          }}
        />
      </div>
    </div>
  );
};

export default memo(MiniProgress);
