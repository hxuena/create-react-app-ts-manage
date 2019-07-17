import * as React from "react";
import { Route, Switch, RouteProps } from "react-router-dom";

import MainLayout from '../layout/MainLayout'
import Manage from '../pages/Manage'
import Statistic from '../pages/Statistic'
import Login from '../pages/Login'
import NotFound  from '../pages/NotFound'
const { Suspense } = React;

interface AiuiProps extends RouteProps {
  key?: string,
  routes?: object[],
}

const routes:AiuiProps[]= [
  {
    path: '/login',
    exact: true,
    component: Login,
    key: 'login'
  },
  {
    path: '/',
    key: 'index',
    component: MainLayout,
    routes: [
      {
        path: '/manage',
        exact: true,
        component: Manage,
        key: 'manage'
      },
      {
        path: '/statistic',
        exact: true,
        component: Statistic,
        key: 'statistic'
      }
    ]
  }
]

const Routes = () => (
  <Switch>
    { routes.map(r  => {
      const { component, routes, ...rest } = r
      const ComponentToBeRender:any = component
      return (
        <Route
          {...rest}
          render={props => <ComponentToBeRender {...props} routes={routes}/>}
        />
      )
    })}
    <Route component={ NotFound } />
  </Switch>
) 
export default Routes
