import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Head } from './components/header/header';
import { RouteCreate } from './components/route/Routes';
// import { Home } from './pages/home/home';

function App() {

  return (
    <BrowserRouter>
     <div className='main-app'>
     {/* <BrowserRouter> */}
        <Head />     
        <RouteCreate />
      </div>
      {/* </BrowserRouter> */}
      <div className="tapete"></div>

    </BrowserRouter> 
  );
}

export default App;
