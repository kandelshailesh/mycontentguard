import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Floating_Button from './components/floating_button';
import Contact_Modal from './components/contact_modal';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './components/homepage';
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
