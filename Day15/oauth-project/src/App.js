import logo from './logo.svg';
import './App.css';
import { signInWithGoogle } from './config/Firebase';
function App() {
  return (
    <div className="App">
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
}

export default App;
