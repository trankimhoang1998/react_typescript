import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ContainerQuery } from 'react-container-query';
import { Switch, Route } from 'react-router';

import Media from 'react-media';
import { Layout } from 'antd';

import queryMedia from 'utils/queryMedia'; //Divide device screen size
import { MainLayoutProps } from './types';
import menuData from 'router/router.config';
import logo from './assets/logo.svg';
import './index.less';
import { DashBoard } from 'app/containers/DashBoardLayout/Loadable';
import Product from 'app/containers/List/Product';
import Header from './components/Header';
import FooterContent from './components/Footer';
import SiderMenuWrapper from 'app/components/SiderMenu';
import RouterPath from 'router/RouterPath';
import ProductForm from 'app/containers/List/components/ProductForm';

const { Content } = Layout;

export const MainLayout: React.FC<MainLayoutProps> = props => {
  const { match, location } = props;
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuCollapse = (collapse: boolean) => setCollapsed(collapse);

  return (
    <>
      <Media query="(max-width: 599px)">
        {isMobile => (
          <ContainerQuery query={queryMedia}>
            {() => {
              return (
                <Layout>
                  <Helmet>
                    <title>Home Page</title>
                    <meta name="description" content="Recruitment" />
                  </Helmet>
                  <SiderMenuWrapper
                    {...props}
                    logo={logo}
                    match={match}
                    location={location}
                    menuData={menuData}
                    collapsed={collapsed}
                    onCollapse={handleMenuCollapse}
                    isMobile={isMobile}
                  />
                  <Layout>
                    <Header
                      menuData={menuData}
                      handleMenuCollapse={handleMenuCollapse}
                      logo={logo}
                      isMobile={isMobile}
                      collapsed={collapsed}
                      {...props}
                    />
                    <Content
                      className="site-layout-background-content"
                      style={{
                        margin: '16px',
                        minHeight: 280,
                      }}
                    >
                      <Switch>
                        <Route
                          exact
                          path={RouterPath.DASHBOARD_ANALYSIS}
                          component={DashBoard}
                          {...props}
                        />
                        <Route
                          exact
                          path={RouterPath.LIST_PRODUCT}
                          component={Product}
                        />
                        <Route
                          exact
                          path={RouterPath.LIST_PRODUCT_ADD}
                          component={ProductForm}
                        />
                      </Switch>
                    </Content>
                    <FooterContent />
                  </Layout>
                </Layout>
              );
            }}
          </ContainerQuery>
        )}
      </Media>
    </>
  );
};
