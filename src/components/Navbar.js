import React from 'react';

const Navbar = () => {
    
    return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/#"> Start Bootstrap </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor01">
                          <ul className="navbar-nav ml-auto">
                              <li className="nav-item active"><a className="nav-link" href="/#">Home </a></li>
                              <li className="nav-item"> <a className="nav-link" href="/#">About</a></li>
                              <li className="nav-item"><a className="nav-link" href="/#">Services</a></li>
                              <li className="nav-item"><a className="nav-link" href="/#">Contact</a></li>
                          </ul>
                        </div>                    
                    </div>
                </nav>
            </div>   



    );
}

export default Navbar;