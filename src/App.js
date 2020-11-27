import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import { BrowserRouter } from 'react-router-dom';
import './css/main.css';
function App() {
  return (
    <BrowserRouter>
      <div className='main_container'>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
