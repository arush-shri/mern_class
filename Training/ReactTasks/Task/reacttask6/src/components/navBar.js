import './customCSS/navbar.css'
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import React, { useState, useEffect } from 'react';
import ListIcon from './customIcon/list';

export default function NavBar({mode, setMode, sideBar, openSideBar}){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const menuOpener = ()=>{
        console.log(sideBar)
        openSideBar(!sideBar)
    }
    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      const navSize = windowWidth <= 1200 ? `container-fluid justify-content-between` :`mt-3 rounded-pill w-75`
      const atagSize = windowWidth <= 1200 ? `container-fluid ms-4` :`ms-4 `
    return(
        <div>
            <div className='d-flex justify-content-center'>
                <nav className={`navbar navbar-expand navbar_${mode} ${navSize}`}>
                    <a className={`${atagSize} nav-link active`} href={() => {}}>
                        Arush Shrivastava
                    </a>
                    <div className='d-xl-none container-fluid justify-content-end align-items-center'>
                        <ListIcon onClick={menuOpener}/>
                    </div>
                    <div className='ms-5 collapse navbar-collapse row justify-content-between'>
                        <div className="d-flex justify-content-between col-5 d-none d-xl-flex">
                            <div className='nav-item dropdown'>
                                <a className={`nav-link dropdown-toggle`} role="button" id="Dropdown" data-bs-toggle="dropdown" aria-expanded="false" href={() => {}}>Projects</a>
                                <div className={`dropdown-menu drop_${mode}`} aria-labelledby="Dropdown">
                                    <a className="dropdown-item" href={() => {}}>a</a>
                                    <hr class="dropdown-divider"></hr>
                                    <a className="dropdown-item" href={() => {}}>a</a>
                                </div>
                            </div>
                            <a className={`nav-link`} href={() => {}}>
                                Certificates
                            </a>
                            <a className={`nav-link`} href={() => {}}>
                                Skills
                            </a>
                        </div>
                        <div className="d-flex justify-content-between col-4 me-4 d-none d-xl-flex">
                            <a className={`nav-link`} href={() => {}}>
                                Social
                            </a>
                            <a className={`nav-link`} href={() => {}}>
                                Contact
                            </a>
                            <DarkModeToggle mode={mode}
                                size="sm" 
                                inactiveTrackColor='#3457D5'
                                inactiveTrackColorOnHover="#0047AB"
                                inactiveTrackColorOnActive="#cbd5e1"
                                inactiveThumbColor='#FFBF00'
                                activeTrackColor="#CF9FFF"
                                activeTrackColorOnHover="#df4ddf"
                                activeThumbColor='Black'
                                onChange={(mode) => {
                                    setMode(mode);
                                }}/>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export function SideBar({mode, setMode}) {
  return (
    <div className="position-fixed" style={{ top: 0, bottom: 0, height: '100%', zIndex: 1 }}>
      <nav id="sidebarMenu" className={`collapse d-block sidebar collapse sideBarColor${mode}`}>
        <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 ">
                <a href="#" className="list-group-item list-group-item-action py-3 ripple" style={{fontSize:'large'}}>
                <i className="fas fa-tachometer-alt fa-fw"></i><span>Arush Shrivastava</span>
                </a>
                <div className='list-group-item list-group-item-action py-3 ripple'>
                    <a className={`nav-link ${mode} dropdown-toggle`} role="button" id="Dropdown" data-bs-toggle="dropdown" aria-expanded="false" href={() => {}}>Projects</a>
                    <div className={`dropdown-menu drop_${mode}`} aria-labelledby="Dropdown">
                        <a className="dropdown-item" href={() => {}}>a</a>
                        <hr class="dropdown-divider"></hr>
                        <a className="dropdown-item" href={() => {}}>a</a>
                    </div>
                </div>
                <a className={`nav-link ${mode} list-group-item list-group-item-action py-3 ripple`} href={() => {}}>
                    Certificates
                </a>
                <a className={`nav-link ${mode} list-group-item list-group-item-action py-3 ripple`} href={() => {}}>
                    Skills
                </a>
                <a className={`nav-link ${mode} list-group-item list-group-item-action py-3 ripple`} href={() => {}}>
                    Social
                </a>
                <a className={`nav-link ${mode} list-group-item list-group-item-action py-3 ripple`} href={() => {}}>
                    Contact
                </a>
                <div className='list-group-item list-group-item-action py-2 ripple'>
                    <DarkModeToggle mode={mode}
                        size="sm" 
                        inactiveTrackColor='#3457D5'
                        inactiveTrackColorOnHover="#0047AB"
                        inactiveTrackColorOnActive="#cbd5e1"
                        inactiveThumbColor='#FFBF00'
                        activeTrackColor="#CF9FFF"
                        activeTrackColorOnHover="#df4ddf"
                        activeThumbColor='Black'
                        onChange={(mode) => {
                            setMode(mode);
                    }}/>
                </div>
            </div>
        </div>
      </nav>
    </div>
  );
}