
import { Router, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import NavHeader from './components/NavHeader'
import OtpPage from './pages/OtpPage';
import Homepage from './pages/Homepage';
function App() {

  const publicURL = [{
    path: "/",
    element: <Homepage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
    ,
  {
    path: "/otp",
    element: <OtpPage />
  }
  ]

  const privateURL=[{
    
  }]
  return (
    <>




      <NavHeader />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/otp' element={<OtpPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>




    </>
  );
}

export default App;
