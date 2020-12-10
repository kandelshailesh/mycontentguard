import React, { Suspense, Provider } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import ValidateToken from './utils/validatetoken';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
export const MCG = React.createContext();
const [status, userinfo] = ValidateToken();

ReactDOM.render(
  <React.StrictMode>
    <MCG.Provider value={status ? { status, ...userinfo } : { status }}>
      <Suspense fallback={<Spin indicator={antIcon} />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </MCG.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
