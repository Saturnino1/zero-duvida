import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer/footer';
import { RouteCreate } from './components/route/Routes';
// import { Home } from './pages/home/home';

function App() {

  return (
    <BrowserRouter>
     <div className='main-app'>  
        <RouteCreate />
        <Footer />
      </div>
      <div className="tapete"></div>

    </BrowserRouter> 
  );
}

export default App;
