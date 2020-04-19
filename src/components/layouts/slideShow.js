import React, { Component } from "react";
import slide01 from "./mosquito.png";
import slide02 from "./holdingBreath.png";
import slide03 from "./reccovary.png";
import slide04 from "./cleaning.png";


class SlideShow extends Component {
  render() {
    return (
      <div classNameName="CarouselPage">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide01} className="d-block w-100" alt="first slide" style={{width:'100%', height:'380px'}} />
            </div>
            <div className="carousel-item">
              <img src={slide02} className="d-block w-100" alt="second slide" style={{width:'100%', height:'380px'}} />
            </div>
            <div className="carousel-item">
              <img src={slide03} className="d-block w-100" alt="third slide" style={{width:'100%', height:'380px'}} />
            </div>

            <div className="carousel-item">
              <img src={slide04} className="d-block w-100" alt="third slide" style={{width:'100%', height:'380px'}} />
            </div>
          </div>
          
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default SlideShow;
