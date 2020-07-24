import React, { memo } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;
const FooterContent = () => {
  return (
    <Footer style={{ padding: 24, textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  );
};

export default memo(FooterContent);
