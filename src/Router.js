import React, { Suspense } from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter,
  useHistory,
} from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';
// import Loader from 'components/LayoutComponents/Loader';
import { Index as NotFoundPage } from './components/404';
// import { PATH_CUSTOM_ATTRIBUTES, LINKS, ROLES } from '_constants';
// import { connect } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import ValidateToken from './utils/validatetoken';
import Homepage from './components/homepage';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router';

const loadable = loader => React.lazy(loader); // added
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
// const baseURL = 'http://localhost:3002';

const routes = [
  // System Pages
  {
    path: `/submit-removals`,
    component: loadable(() => import('./components/submit_removal')),
    exact: true,
    authorize: true,
  },
  {
    path: '/removal-pages/additional-information',
    component: loadable(() => import('./components/additional_information')),
    exact: false,
    authorize: true,
  },
  {
    path: ' /removal-page/:value',
    component: loadable(() => import('./components/removal_page')),
    exact: false,
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
    path: '/home',
    component: loadable(() => import('./components/homepage')),
    exact: true,
  },
];

const Router = props => {
  const { history } = props;
  const [result] = ValidateToken();

  return (
    <Suspense fallback={<Spin indicator={antIcon} />}>
      <BrowserRouter>
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
          <Suspense fallback={<Spin indicator={antIcon} />}>
            {routes.map(route => {
              if (route.authorize)
                return (
                  <PrivateRoute
                    authorized={result}
                    key={route.path}
                    keys={route.path}
                    exact={route.exact}
                    {...route}
                  />
                );
              return (
                <Route
                  path={route.path}
                  component={route.component}
                  key={route.path}
                  exact={route.exact}
                />
              );
            })}
            {/* </Switch> */}
          </Suspense>
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
