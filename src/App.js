import './App.css';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'


// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Services from './pages/Services';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';

function App() {
  const location = useLocation();
  console.log(location)
  return (
    <div className="App">
      <div id='pages' className='container'>
        
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
       

      </div>

      <Footer />
    </div>
  );
}

export default App;
