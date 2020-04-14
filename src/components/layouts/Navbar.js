import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light ">
        <Link className="navbar-brand ml-6" to="/">
         <h3 className="sit-brand" style={{color: '#000000'}}>KOVID-19 KASSIS</h3>
          
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="fas fa-bars" style={{ color: "#fff" }} />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto font-weight-bold">
            <li className="nav-item active ">
              <Link className="nav-link text-white  ml-5" to="/">
                Ugtuma&nbsp;<i className="home"></i>
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white ml-5"
                to="/Accordion"
              >
               Esser kee Gacsa
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white ml-5"
                to="/about"
              >
                Nee wagsisaak
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white  ml-5"
                to="/contact"
              >
                Neh uktuba
              </Link>
            </li>
          </ul>
         
        </div>
       
      </nav>

      <h3 className="mt-3 ml-3 font-weight-bold fixed subheading">
      Mano elle taysem qaafiyata elle soolam saytunaana! 
      </h3>
    </React.Fragment>
  );
}

export default Navbar;
