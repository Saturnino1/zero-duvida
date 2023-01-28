import './App.css';
import { Head } from './components/header/header';
import { Home } from './pages/home/home';
// import styled from 'styled-components';
function App() {
  return (
    <div className='main-app'>
      <Head/>
      <Home/>
    </div>
  );
}



export default App;
