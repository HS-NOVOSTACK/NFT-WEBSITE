import viteLogo from '/vite.svg';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="#">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex me-5 mt-2 mt-lg-0">
                            <input className="form-control me-2 rounded-pill search-input bg-transparent" type="search" placeholder="Search" aria-label="Search" style={{ width: '300px' }} />
                        </form>
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <a className="nav-link active fw-light" aria-current="page" href="#">Home <i className="fas fa-caret-down ms-1"></i></a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link active fw-light" aria-current="page" href="#">Explore <i className="fas fa-caret-down ms-1"></i></a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link active fw-light" aria-current="page" href="#">Blog <i className="fas fa-caret-down ms-1"></i></a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link active fw-light" aria-current="page" href="#">How It Works <i className="fas fa-caret-down ms-1"></i></a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link active fw-light" aria-current="page" href="#">Pages <i className="fas fa-caret-down ms-1"></i></a>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center mt-3 mt-lg-0">
                            <button className="boton-elegante me-3 ms-5">
                                <img width={20} height={20} src="https://img.icons8.com/ffffff/material-sharp/24/bell.png" alt="bell" />
                                <span className='notification'>8</span>
                            </button>
                            <button className="boton-elegante me-3">
                                <img width={20} height={20} src="https://img.icons8.com/ffffff/material-outlined/24/user--v1.png" alt="user" />
                            </button>
                            <button className="wallet-btn rounded-pill">Connect Wallet</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;

