import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Floating_Button from './components/floating_button';
import Contact_Modal from './components/contact_modal';
import { BrowserRouter } from 'react-router-dom';
import './css/main.css';
function App() {
  const [support, setsupport] = useState(false);
  return (
    <BrowserRouter basename='/members'>
      <div className='main_container'>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
        {support && <Contact_Modal setsupport={setsupport} />}
        <Floating_Button setsupport={setsupport} />
      </div>
    </BrowserRouter>
  );
}

export default App;
