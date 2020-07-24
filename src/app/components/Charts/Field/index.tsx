import React, { memo } from 'react';

import './index.less';

const Field = ({ label, value }) => (
  <div className="field">
    <span className="label">{label}</span>
    <span className="number">{value}</span>
  </div>
);

export default memo(Field);
