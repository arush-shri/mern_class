import './customCSS/navbar.css'
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import React, { useState, useEffect } from 'react';
import ListIcon from './customIcon/list';

export default function NavBar({mode, setMode}){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [sideBar, openSideBar] = useState(false);
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
      const atagSize = windowWidth <= 1200 ? `container-fluid` :``
    return(
        <div>
            <div className='d-flex justify-content-center'>
                <nav className={`navbar navbar-expand navbar_${mode} ${navSize}`}>
                    <a className={`ms-4 ${atagSize} nav-link active ${mode}`} href={() => {}}>
                        Arush Shrivastava
                    </a>
                    <div className='d-xl-none container-fluid justify-content-end align-items-center'>
                        <ListIcon onClick={menuOpener} />
                    </div>
                    <div className='ms-5 collapse navbar-collapse row justify-content-between'>
                        <div className="d-flex justify-content-between col-5 d-none d-xl-flex">
                            <div className='nav-item dropdown'>
                                <a className={`nav-link ${mode} dropdown-toggle`} role="button" id="Dropdown" data-bs-toggle="dropdown" aria-expanded="false" href={() => {}}>Projects</a>
                                <div className={`dropdown-menu drop_${mode}`} aria-labelledby="Dropdown">
                                    <a className="dropdown-item" href={() => {}}>a</a>
                                    <hr class="dropdown-divider"></hr>
                                    <a className="dropdown-item" href={() => {}}>a</a>
                                </div>
                            </div>
                            <a className={`nav-link ${mode}`} href={() => {}}>
                                Certificates
                            </a>
                            <a className={`nav-link ${mode}`} href={() => {}}>
                                Skills
                            </a>
                        </div>
                        <div className="d-flex justify-content-between col-4 me-4 d-none d-xl-flex">
                            <a className={`nav-link ${mode}`} href={() => {}}>
                                Social
                            </a>
                            <a className={`nav-link ${mode}`} href={() => {}}>
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