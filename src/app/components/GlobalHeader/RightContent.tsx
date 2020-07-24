import React, { memo } from 'react';
import { Menu, Avatar } from 'antd';
import {
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import HeaderDropdown from 'app/components/HeaderDropdown';

const RightContent = () => {
  const onMenuClick = () => {
    console.log('onClick Dropdown Menu');
  };

  const menu = (
    <Menu className="menu">
      <Menu.Item key="userCenter" onClick={onMenuClick}>
        <UserOutlined />
        <span>Account Center</span>
      </Menu.Item>
      <Menu.Item key="userinfo" onClick={onMenuClick}>
        <SettingOutlined />
        <span>Account Setting</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" onClick={onMenuClick}>
        <LogoutOutlined />
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="right ">
      <HeaderDropdown overLayMenu={menu}>
        <span className="action account">
          <Avatar
            size="small"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <span className="name">Account Admin</span>
        </span>
      </HeaderDropdown>
    </div>
  );
};

export default memo(RightContent);
