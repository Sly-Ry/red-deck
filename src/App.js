import { Route, Routes } from 'react-router-dom';

// ROUTES
import Home from './pages/Home/Home'

// CSS
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
  );
}
