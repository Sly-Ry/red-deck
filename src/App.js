import { Route, Routes } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

// CSS
import './App.css';

// ROUTES
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Catering from './pages/Catering/Catering';
import GiftCard from './pages/GiftCard/GiftCard';
import Contact from './pages/Contact/Contact';

// COMPONENTS
import { NavLayout } from './layouts/NavLayout/NavLayout';

export default function App() {
  return (
    <>
      <div className="text-white" style={{fontFamily: "'Montserrat', sans-serif", fontWeight: 100}}>
        <div className="row">
            <NavLayout />
            <div className="col-2"></div>
            <div className="col col-10">
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about/*' element={<About />}/>
                <Route path='/menu/*' element={<Menu />}/>
                <Route path='/catering/*' element={<Catering />}/>
                <Route path='/gift-card/*' element={<GiftCard />}/>
                <Route path='/contact/*' element={<Contact />}/>
              </Routes>
            </div>
        </div>
      </div>
    </>
  );
}
