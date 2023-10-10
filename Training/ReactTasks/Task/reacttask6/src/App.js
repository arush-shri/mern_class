import './App.css';
import NavBar from './components/navBar';
import Home from './components/homeBody';
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

function App() {
  const [mode, setMode] = useState('dark');
  return (
    <div className={`App app_${mode}`}>
      <NavBar mode={mode} setMode={setMode}/>
      <Home theme={mode}/>
    </div>
  );
}

export default App;
