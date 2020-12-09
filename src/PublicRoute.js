import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
import { notification } from 'antd';
import Footer from './components/footer';
import Header from './components/login_header';

export const PublicRoute = ({ component: Component, path, keys, exact }) => {
  //   alert(path);
  return (
    <Route
      path={path}
      key={keys}
      exact={exact}
      render={props => {
        if (path == '/') {
          return <Component {...props} />;
        }
        return (
          <div className='main_container'>
            <Header
              {...props}
              src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/07/mycontentguardlogosvg.svg'
            />
            <div className='main_content'>
              <Component {...props} />
            </div>
            <Footer />
          </div>
        );
      }}
    />
  );
};
