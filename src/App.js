import './App.css';
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
    </>
  );
}

export default App;
