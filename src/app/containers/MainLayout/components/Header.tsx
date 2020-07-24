import React, { memo } from 'react';
import './Header.less';
import { Layout } from 'antd';

import TopNavHeader from 'app/components/TopNavHeader';
import GlobalHeader from 'app/components/GlobalHeader';
import { HeaderProps } from '../types';

const { Header } = Layout;
const HeaderView = (props: HeaderProps) => {
  const { isMobile, collapsed, handleMenuCollapse, logo, menuData } = props;

  return (
    <Header style={{ padding: 0, zIndex: 2 }}>
      {isMobile ? (
        <TopNavHeader
          logo={logo}
          menuData={menuData}
          onCollapse={handleMenuCollapse}
          {...props}
        />
      ) : (
        <GlobalHeader
          onCollapse={handleMenuCollapse}
          collapsed={collapsed}
          logo={logo}
          isMobile={isMobile}
          {...props}
        />
      )}
    </Header>
  );
};

export default memo(HeaderView);
