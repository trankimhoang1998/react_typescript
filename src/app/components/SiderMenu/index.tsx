import React, { memo } from 'react';
import { Drawer } from 'antd';
import { getFlatMenuKeys } from 'utils/SiderMenuUtil';
import SiderMenu from './SiderMenu';
import './index.less';
import { match } from 'react-router';
import { Location } from 'history';

interface SiderMenuWrapperProps {
  menuData: any[];
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
  logo: string;
  isMobile: boolean;
  match: match;
  location: Location;
}

const SiderMenuWrapper = memo((props: SiderMenuWrapperProps) => {
  const {
    menuData,
    collapsed,
    onCollapse,
    logo,
    isMobile,
    match,
    location,
  } = props;
  const flatMenuKeys: string[] = getFlatMenuKeys(menuData);
  return isMobile ? (
    <Drawer
      visible={!collapsed}
      placement="left"
      onClose={() => onCollapse(true)}
      style={{
        padding: 0,
        height: '100vh',
      }}
    >
      <SiderMenu
        {...props}
        logo={logo}
        flatMenuKeys={flatMenuKeys}
        collapsed={isMobile ? false : collapsed}
        match={match}
        location={location}
      />
    </Drawer>
  ) : (
    <SiderMenu {...props} logo={logo} flatMenuKeys={flatMenuKeys} />
  );
});

export default SiderMenuWrapper;
