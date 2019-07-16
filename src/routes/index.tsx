import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import MainLayout from '../layout/MainLayout'
import Manage from '../pages/Manage'
import Statistic from '../pages/Statistic'

const customHistory = createBrowserHistory();

const routes = [
  {
    path: '/',
    component: MainLayout,
    exact: true,
    children: [
      {
        path: '/manage',
        exact: true,
        component: Manage
      },
      {
        path: '/statistic',
        exact: true,
        component: Statistic
      }
    ]
  }
]

const Routes = () => (
  <Router history={customHistory}>
    {routes.map((route, index) => {
      let { component, path, exact } = route
      let Lazy:any = component
      return <Route
        key={index}
        path={path}
        exact={exact}
        children={props => {
          if(!route.children) return
          console.log('props  ', route.children)
          return <Lazy {...props} routes={route.children} />
        }}
      />
      })}
  </Router>
)
  
export default Routes
