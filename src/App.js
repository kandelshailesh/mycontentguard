import { useState } from 'react';
import './App.css';

// import store from 'store';
import './css/main.css';
import ValidateToken from './utils/validatetoken';
import Router from './Router';

function App() {
  // const [support, setsupport] = useState(false);
  // const [is_login, setlogin] = useState(() => {
  //   const [result] = ValidateToken();
  //   if (result) return true;
  //   else return false;
  // });
  return <Router />;
}

export default App;
