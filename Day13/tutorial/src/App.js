
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CreateForm from './components/CreateForm';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Readform from './components/Readform';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route exact path='/' element={<CreateForm />}></Route> */}
          <Route exact path='/' element={<Readform />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
