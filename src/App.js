import logo from './logo.svg';
import './App.css';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Contact from './Component/Pages/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>

    </div>
  );
}

export default App;
