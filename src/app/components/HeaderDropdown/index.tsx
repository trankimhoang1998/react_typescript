import React, { memo } from 'react';
import { Dropdown } from 'antd';
import './index.less';
import { HeaderDropdownProps } from './types';

const HeaderDropdown = (props: HeaderDropdownProps) => {
  return (
    <Dropdown
      placement="bottomRight"
      overlay={props.overLayMenu}
      className="container"
    >
      {props.children}
    </Dropdown>
  );
};

export default memo(HeaderDropdown);
