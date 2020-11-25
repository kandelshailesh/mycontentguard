import './App.css';
import Header from './components/header';
import Content from './components/content';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Content></Content>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </>
  );
}

export default App;
