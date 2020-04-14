import React, { Component } from 'react'
import './AnimatedTex.module.css'
export default class AnimatedTex extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              {/* carousel code */}
              <div id="carouselExampleIndicators" className="carousel slide">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                  <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                  <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner skyblue">
                  {/* first slide */}
                  <div className="carousel-item active skyblue">
                    <div className="carousel-caption d-md-block">
                      <h3 data-animation="animated bounceInLeft">
                        This is the caption for slide 1
                      </h3>
                      <h3 data-animation="animated bounceInRight">
                        This is the caption for slide 1
                      </h3>
                      <button className="btn btn-primary btn-lg" data-animation="animated zoomInUp">Button</button>
                    </div>
                  </div>
                  {/* second slide */}
                  <div className="carousel-item skyblue">
                    <div className="carousel-caption d-md-block">
                      <h3 className="icon-container" data-animation="animated bounceInDown">
                        <span className="fa fa-heart" />
                      </h3>
                      <h3 data-animation="animated bounceInUp">
                        This is the caption for slide 2
                      </h3>
                      <button className="btn btn-primary btn-lg" data-animation="animated zoomInRight">Button</button>
                    </div>
                  </div>
                  {/* third slide */}
                  <div className="carousel-item skyblue">
                    <div className="carousel-caption d-md-block">
                      <h3 className="icon-container" data-animation="animated zoomInLeft">
                        <span className="fa fa-glass" />
                      </h3>
                      <h3 data-animation="animated flipInX">
                        This is the caption for slide 3
                      </h3>
                      <button className="btn btn-primary btn-lg" data-animation="animated lightSpeedIn">Button</button>
                    </div>
                  </div>
                </div>
                {/* controls */}
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}