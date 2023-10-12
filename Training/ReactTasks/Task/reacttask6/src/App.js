import './App.css';
import '../src/font.css'
import { Routes, Route } from 'react-router-dom';
import NavBar, { SideBar } from './components/navBar';
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Home from './components/pages/homeBody';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';
import Certificate from './components/pages/certificates';
import Social from './components/pages/social';
import About from './components/pages/about';

function App() {
  const [mode, setMode] = useState('dark');
  const [sideBar, openSideBar] = useState(false);
  return (
    <div className={`App app_${mode}`}>
      <NavBar mode={mode} setMode={setMode} sideBar={sideBar} openSideBar={openSideBar}/>
      {sideBar? <SideBar mode={mode} setMode={setMode} />: '' }
      <Routes>
        <Route path='/' element={<Home theme={mode}/>}/>
        <Route path='/project' element={<Projects theme={mode} />}/>
        <Route path='/certificate' element={< Certificate mode={mode} />}/>
        <Route path='/about' element={<About theme={mode} />}/>
        <Route path='/social' element={<Social theme={mode} />}/>
        <Route path='/contact' element={<Contact theme={mode} />}/>
      </Routes>
    </div>
  );
}

export default App;
