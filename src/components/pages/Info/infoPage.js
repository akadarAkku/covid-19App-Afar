import React, { Component } from 'react'

export default class InfoPage extends Component {
    render() {
        return (

          <div className="blog-section paddingTB60 ">
          <div className="container">
            <div className="row">
              <div className="site-heading text-center">
                <h3>Our Portfolio</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim </p>
                <div className="border" />
              </div>
            </div>
            <div className="row text-center">
              <div className="col-sm-6 col-md-4">
                <div className="blog-box">
                  <div className="blog-box-image">
                    <img src="./images/transmission.png" className="img-responsive" alt="" style={{width:'100%'}} />
                  </div>
                  <div className="blog-box-content">
                    <h4><a href="#">quis porta tellus dictum</a></h4>
                    <p>Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. 
                      Sed ornare ligula eget tortor tempor, quis porta tellus dictum.</p>
                    <a href="/" className="btn btn-default site-btn">Read More</a>
                  </div>
                </div>
              </div> {/* End Col */}					
              <div className="col-sm-6 col-md-4">
                <div className="blog-box">
                  <div className="blog-box-image">
                    <img src="https://images.pexels.com/photos/374897/pexels-photo-374897.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" className="img-responsive" alt="" />
                  </div>
                  <div className="blog-box-content">
                    <h4><a href="#">quis porta tellus dictum</a></h4>
                    <p>Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. 
                      Sed ornare ligula eget tortor tempor, quis porta tellus dictum.</p>
                    <a href className="btn btn-default site-btn">Read More</a>
                  </div>
                </div>
              </div> {/* End Col */}				
              <div className="col-sm-6 col-md-4">
                <div className="blog-box">
                  <div className="blog-box-image">
                    <img src="https://images.pexels.com/photos/541522/pexels-photo-541522.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" className="img-responsive" alt="" />
                  </div>
                  <div className="blog-box-content">
                    <h4><a href="#">quis porta tellus dictum</a></h4>
                    <p>Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. 
                      Sed ornare ligula eget tortor tempor, quis porta tellus dictum.</p>
                    <a href className="btn btn-default site-btn">Read More</a>
                  </div>
                </div>
              </div> {/* End Col */}
            </div>
          </div>
        </div>
      );
    }
  }