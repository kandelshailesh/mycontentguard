import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './css/main.css';
import { ValidateToken } from './utils/validatetoken';
import Router from './Router';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
export const MCG = React.createContext();

// import store from 'store';

function App() {
  const [status, setstatus] = useState(false);
  const [userinfo, setuserinfo] = useState(null);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const validate = async () => {
      const result = await ValidateToken();
      setstatus(result[0]);
      setuserinfo(result[1]);
      setloading(true);
    };
    validate();
  }, []);

  return loading ? (
    <React.StrictMode>
      <MCG.Provider value={status ? { status, ...userinfo } : { status }}>
        {/* <Suspense fallback={<Spin indicator={antIcon} />}> */}
        <Suspense
          fallback={
            <div className='loader'>
              <i className='fa fa-spinner fa-spin'></i>
            </div>
          }
        >
          <HashRouter>
            <Router result={status} />
          </HashRouter>
        </Suspense>
      </MCG.Provider>
    </React.StrictMode>
  ) : (
    <div className='loader'>
      <i className='fa fa-spinner fa-spin'></i>
    </div>
  );
}

export default App;
