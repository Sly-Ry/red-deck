import { Route, Routes } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

// CSS
import './App.css';

// ROUTES
import Home from './pages/Home/Home'

// COMPONENTS
import { NavLayout } from './layouts/NavLayout';

export default function App() {
  return (
    <>
      <div className="text-white" style={{fontFamily: "'Montserrat', sans-serif", fontWeight: 100}}>
        <div className="row">
            <NavLayout />
            <div className="col col-10">
              <Routes>
                <Route path='/' element={<Home />}/>
              </Routes>
            </div>
        </div>
      </div>
    </>
  );
}
