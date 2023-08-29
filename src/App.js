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
              component={<i className="bi bi-cup-hot fs-1"></i>}
              className='scrolltab'
              color=''
              style={{
                backgroundColor: '',
                width: 75, 
                height: 75,
                position:'fixed',
                bottom: 10,
                right: 15,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50
              }}
            />
        </div>
      </div>
    </>
  );
}
