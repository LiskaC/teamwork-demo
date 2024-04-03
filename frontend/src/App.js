import { LoginView } from './login/Login';
import { Navbar } from './navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>ReDI Teamwork Demo</h1>
      <LoginView/>
    </div>
  );
}

export default App;
