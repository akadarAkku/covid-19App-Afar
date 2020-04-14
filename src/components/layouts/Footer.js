import React from "react";

const Footer = () => {
  return (
    <div className="footer" style={{backgroundColor:'#008080', width:'100%'}}>
    <footer className="page-footer font-small blue pt-4">
    {/* Footer Links */}
    <div className="container-fluid text-center text-md-left">
      {/* Grid row */}
      <div className="row">
        {/* Grid column */}
        <div className="col-md-6 mt-md-0 mt-3">
          {/* Content */}
          <h5 className="text-uppercase">Tû mabul (essero) neh ruuba.</h5>
          <p>kovid19.contact@gmail.com</p>
        </div>
        {/* Grid column */}
        <hr className="clearfix w-100 d-md-none pb-3" />
       
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 mb-md-0 mb-3">
          {/* Links */}
         
      
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
    {/* Footer Links */}
    {/* Copyright */}
    <div className="footer-copyright text-center py-3">©2020 Ikoytiinî gar:
      <a href="https://www.covid19-afarafat.com/">  www.covid19-afarafat.com</a>
    </div>
    {/* Copyright */}
  </footer>
  </div>
);
}

export default Footer;
