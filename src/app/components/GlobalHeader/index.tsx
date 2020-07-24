import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { GlobalHeaderProps } from './types';
import './index.less';
import RightContent from './RightContent';

const GlobalHeader = ({
  collapsed,
  onCollapse,
  isMobile,
  logo,
}: GlobalHeaderProps) => {
  const triggerResizeEvent = () => {
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  };

  useEffect(() => {
    triggerResizeEvent();
    return () => {
      triggerResizeEvent();
    };
  }, []);

  const toggle = () => {
    onCollapse(!collapsed);
    triggerResizeEvent();
  };

  return (
    <div className="header">
      {isMobile && (
        <Link to="/" className="logo" key="logo">
          <img src={logo} alt="logo" width="32" />
        </Link>
      )}
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggle,
      })}
      <RightContent />
    </div>
  );
};

export default memo(GlobalHeader);
