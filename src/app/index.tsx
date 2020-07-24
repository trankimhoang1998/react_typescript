/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import RouterPath from 'router/RouterPath';
import { GlobalStyle } from 'styles/global-styles';

import { MainLayout } from './containers/MainLayout/Loadable';
import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - Recruitment" defaultTitle="Recruitment">
        <meta name="description" content="Recruitment application" />
      </Helmet>

      <Switch>
        <Redirect
          exact
          from={RouterPath.ROOT}
          to={RouterPath.DASHBOARD_ANALYSIS}
        />
        <Route
          exact
          path={RouterPath.DASHBOARD_ANALYSIS}
          component={MainLayout}
        />
        <Route exact path={RouterPath.LIST_PRODUCT} component={MainLayout} />
        <Route
          exact
          path={RouterPath.LIST_PRODUCT_ADD}
          component={MainLayout}
        />
        <Route
          exact
          path={RouterPath.LIST_PRODUCT_EDIT}
          component={MainLayout}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
