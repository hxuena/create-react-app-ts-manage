import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import MainLayout from '../layout/MainLayout'
import Manage from '../pages/Manage'
import Statistic from '../pages/Statistic'

const customHistory = createBrowserHistory();

const routes = [
  {
    path: '/',
    exact: true,
    component: MainLayout
  },
  {
    path: '/manage',
    exact: true,
    component: Manage
  },
  {
    path: '/statistic',
    exact: true,
    component: Statistic
  },
]

const Routes = () => (
  <Router history={customHistory}>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Router>
)
  
export default Routes
