import './customCSS/navbar.css'
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import Home from './homeBody';

export default function NavBar({mode, setMode}){
    
    return(
        <div>
            <div className='d-flex justify-content-center'>
                <nav className={`navbar navbar-expand-lg navbar_${mode} rounded-pill w-75 mt-3`}>
                    <div className='collapse navbar-collapse row justify-content-between'>
                        <div className="ms-4 d-flex justify-content-between col-6">
                            <a className={`nav-link active ${mode}`} href={() => {}}>
                                Arush Shrivastava
                            </a>
                            <a className={`nav-link ${mode}`} href={() => {}}>
                                Projects
                            </a>
                            <a className={`nav-link ${mode}`} href={() => {}}>
                                Certificates
                            </a>
                            <a className={`nav-link ${mode}`} href={() => {}}>
                                Skills
                            </a>
                        </div>
                        <div className="d-flex justify-content-between col-3 me-5">
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
                                activeTrackColorOnHover="#BF40BF"
                                activeThumbColor='Black'
                                onChange={(mode) => {
                                    setMode(mode);
                                }}/>
                        </div>
                    </div>
                </nav>
            </div>
            <div>
                <Home theme={mode}/>
            </div>
        </div>
    )
}