import './App.css';
import NavBar from './components/navBar';
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

function App() {
  const [mode, setMode] = useState('light');
  return (
    <div className={`App app_${mode}`}>
      <NavBar mode={mode} setMode={setMode}/>
    </div>
  );
}

export default App;
