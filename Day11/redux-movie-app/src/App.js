
import './App.css';
import {BrowserRouter as router,Route,Routes, Router} from 'react-router-dom' 
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
       <Router>
        <Header></Header>
         <Routes>
          
         </Routes>
         <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
