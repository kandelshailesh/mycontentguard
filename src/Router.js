import React, { Suspense } from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter,
  useHistory,
} from 'react-router-dom';
import { Index as NotFoundPage } from './components/404';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import ValidateToken from './utils/validatetoken';
import Homepage from './components/homepage';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router';

const loadable = loader => React.lazy(loader); // added
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const routes = [
  // System Pages
  {
    path: '/submit-removals',
    component: loadable(() => import('./components/submit_removal')),
    exact: true,
    authorize: true,
  },
  {
    path: '/my-account',
    component: loadable(() => import('./components/login')),
    exact: true,
  },
  {
    path: '/removal-pages/additional-information',
    component: loadable(() => import('./components/additional_information')),
    exact: true,
    authorize: true,
  },
  {
    path: '/removal-pages/:value/',
    component: loadable(() => import('./components/removal_page')),
    exact: true,
    authorize: true,
  },
  {
    path: '/removal-progress',
    component: loadable(() => import('./components/removal_progress')),
    exact: true,
    authorize: true,
  },
  {
    path: '/contact',
    component: loadable(() => import('./components/contact')),
    exact: true,
    authorize: true,
  },
  {
    path: '/user-profile',
    component: loadable(() => import('./components/editsection')),
    exact: true,
    authorize: true,
  },
  {
    path: '/home',
    component: loadable(() => import('./components/homepage')),
    exact: true,
  },
];

const Router = props => {
  const { history } = props;
  const [result] = ValidateToken();

  return (
    <Switch>
      <Route
        exact
        path='/'
        // path={['/', '/home']}
        render={() => {
          if (result) {
            return <Redirect to='/submit-removals' />;
          } else {
            return <Homepage />;
          }
        }}
      />
      {/* { */}
      {/* <Suspense fallback={<Spin indicator={antIcon} />}> */}
      {routes.map(route => {
        if (route.authorize)
          return (
            <PrivateRoute
              authorized={result}
              key={route.path}
              keys={route.path}
              exact={route.exact}
              {...route}
              {...props}
            />
          );
        return (
          <PublicRoute
            {...props}
            path={route.path}
            component={route.component}
            key={route.path}
            exact={route.exact}
          />
        );
      })}
      {/* </Switch> */}
      {/* </Suspense> */}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default withRouter(Router);
