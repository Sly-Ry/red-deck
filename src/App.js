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
import { AllFooterLayout } from './components/AllFooterComponent';
import ScrollToTop from 'react-scroll-to-top';

export default function App() {
  return (
    <>
      <div className="text-white" style={{fontFamily: "'Montserrat', sans-serif", fontWeight: 100}}>
        <div className="row">
            <NavLayout />
            <div className="col-md-12 col-xxl-2"></div>
            <div className="col col-md-12 col-xxl-10">
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about/*' element={<About />}/>
                <Route path='/menu/*' element={<Menu />}/>
                <Route path='/catering/*' element={<Catering />}/>
                <Route path='/gift-cards/*' element={<GiftCard />}/>
                <Route path='/contact/*' element={<Contact />}/>
              </Routes>
            </div>
            <AllFooterLayout hidden="hidden" />
            <ScrollToTop 
              smooth 
              className='scrolltab'
              color='white'
              style={{
                backgroundColor: 'transparent',
                width: 75, 
                height: 55,
                position:'fixed',
                bottom: 0,
                right: 40,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0
              }}
            />
        </div>
      </div>
    </>
  );
}
