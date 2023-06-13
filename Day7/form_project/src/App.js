import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Deleted from './pages/deleted';
import Completed from './pages/completed';
import Home from './pages/home';
function App() {
  return (
  <Home>
    <Router>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/delete' element={<Deleted />} />
        <Route path='/completed'  element={<Completed/>} /> 
      </Routes>
    </Router>
    </Home>
  );
}

export default App;
