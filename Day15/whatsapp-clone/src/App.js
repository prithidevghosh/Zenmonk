import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Chats from './components/Chats';

function App() {
  return (
    <div className="App">
      <div className="app_body">
        <Sidebar />
        <Chats />
      </div>
    </div>
  );
}

export default App;
