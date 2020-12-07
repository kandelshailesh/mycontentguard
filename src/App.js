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

function App() {
  const [support, setsupport] = useState(false);
  const [is_login, setlogin] = useState(() => {
    const [result] = ValidateToken();
    if (result) return true;
    else return false;
  });
  return (
    <BrowserRouter basename='/members'>
      {is_login ? (
        <div className='main_container'>
          <Header
            src={
              'https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/07/mycontentguardlogosvg.svg'
            }
          ></Header>
          <Content></Content>
          <Footer></Footer>
          {support && <Contact_Modal setsupport={setsupport} />}
          <Floating_Button setsupport={setsupport} />
        </div>
      ) : (
        <div className='main_container'>
          {/* <Header></Header> */}
          <Homepage></Homepage>
          <Footer></Footer>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
