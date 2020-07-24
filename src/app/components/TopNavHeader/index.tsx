import React, { memo, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './index.less';
import { TopNavHeaderProps } from './types';

const TopNavHeader = ({ logo }: TopNavHeaderProps) => {
  const [maxWidth, setMaxWidth] = useState(0);
  const screenWidth = window.innerWidth;

  useMemo(() => {
    setMaxWidth((screenWidth > 1200 ? 1200 : screenWidth) - 280 - 120 - 40);
  }, [screenWidth]);

  return (
    <div className="head light">
      <div className="main wide">
        <div className="left">
          <div className="logo" key="logo" id="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
              <h1>Header</h1>
            </Link>
          </div>
          <div style={{ maxWidth }} />
        </div>
      </div>
    </div>
  );
};

export default memo(TopNavHeader);
