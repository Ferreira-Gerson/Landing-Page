import React from "react";


const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid justify-content-around">
          <a className="navbar-brand mx-5" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <a class="nav-link active" href="#">Home</a>
                <a class="nav-link" href="#">About</a>
                <a class="nav-link" href="#">Services</a>
                <a class="nav-link" href="#">Contact</a>
            </ul>
          </div>
        </div>
      </nav>
    
    );
};

export default Navbar;