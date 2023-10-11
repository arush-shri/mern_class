import './App.css';
import NavBar, { SideBar } from './components/navBar';
// import Home from './components/pages/homeBody';
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Certificate from './components/pages/certificates';

function App() {
  const [mode, setMode] = useState('dark');
  const [sideBar, openSideBar] = useState(false);
  return (
    <div className={`App app_${mode}`}>
      <NavBar mode={mode} setMode={setMode} sideBar={sideBar} openSideBar={openSideBar}/>
      {sideBar? <SideBar mode={mode} setMode={setMode} />: '' }
      {/* <Home theme={mode}/> */}
      <Certificate />
    </div>
  );
}

export default App;
