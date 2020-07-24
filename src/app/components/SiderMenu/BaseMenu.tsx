import React, { memo, useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Location } from 'history';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

interface BaseMenuProps {
  location: Location;
  menuData: any[];
}

const BaseMenu = memo((props: BaseMenuProps) => {
  const { location, menuData } = props;

  const [rootSubmenuKeys] = useState(menuData.map(item => item.path));
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location.pathname]);

  const renderSubMenu = item => {
    return item.submenu ? (
      <SubMenu key={item.path} icon={<item.icon />} title={item.title}>
        <span />
        {item.submenu.map(renderSubMenu)}
      </SubMenu>
    ) : (
      <Menu.Item key={item.path} icon={<item.icon />}>
        <Link to={item.path}>{item.title}</Link>
      </Menu.Item>
    );
  };

  const onOpenChange = e => {
    const latestOpenKey = e.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(e);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <>
      <Menu
        onOpenChange={onOpenChange}
        selectedKeys={selectedKeys}
        mode="inline"
        theme="dark"
        subMenuCloseDelay={0.2}
        subMenuOpenDelay={0.2}
      >
        {menuData.map(renderSubMenu)}
      </Menu>
    </>
  );
});

export default BaseMenu;
