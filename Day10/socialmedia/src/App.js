import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Details from './components/Details';
import Profile from './components/Profile';
import Signup from './components/Signup';

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signUp' element={<Signup />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/details' element={<Details />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
