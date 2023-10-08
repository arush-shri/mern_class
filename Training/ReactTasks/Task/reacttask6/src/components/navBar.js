export default function NavBar(){
    return(
        <div className='d-flex justify-content-center mt-3'>
            <nav className='navbar navbar-expand navbar-dark bg-dark rounded-pill w-75'>
                <div className='collapse navbar-collapse'>
                    <ul className="navbar-nav w-100 ms-4 me-4 justify-content-between">
                        <li className="nav-item">
                            <a className="nav-link active" href={() => {}}>
                                Arush Shrivastava
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={() => {}}>
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={() => {}}>
                                Certificates
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={() => {}}>
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={() => {}}>
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={() => {}}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}