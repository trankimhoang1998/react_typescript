import React, { memo, Suspense } from 'react';
import { Link, match } from 'react-router-dom';
import { Location } from 'history';
import { Layout } from 'antd';
import BaseMenu from './BaseMenu';

let firstMount = true;

const { Sider } = Layout;

interface SiderMenuProps {
  flatMenuKeys: string[];
  collapsed: boolean;
  logo: string;
  onCollapse: (collapsed: boolean) => void;
  isMobile?: boolean;
  menuData: any[];
  match: match;
  location: Location;
}

const SiderMenu = memo((props: SiderMenuProps) => {
  const { onCollapse, collapsed, logo, menuData, location, isMobile } = props;

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      onCollapse={collapse => {
        if (firstMount || !isMobile) {
          onCollapse(collapse);
        }
      }}
      width={256}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        top: 0,
        left: 0,
      }}
    >
      <div className="logo-custom">
        <Link to="/">
          <img src={logo} alt="logo" />
          <h1>Ant Design Admin</h1>
        </Link>
      </div>
      <Suspense fallback={null}>
        <BaseMenu {...props} location={location} menuData={menuData} />
      </Suspense>
    </Sider>
  );
});

export default SiderMenu;
