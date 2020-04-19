import React, { Component } from 'react'
import './infoPage.module.css';

export default class InfoPage extends Component {
    render() {
      return (
        <div className="container">
        <div className="row-2">
          <p>Qado basal</p>
          <img src="./images/akku.jpg" style={{width:'16%', height:'140px', marginLeft:'5%'}} alt="..." className="img-rounded" />
          
          <img src="./images/" alt="..." className="img-1-rounded" />
          <img src="./images/" alt="..." className="img-rounded" />
          <img src="./images/" alt="..." className="img-rounded" />
          <img src="./images/" alt="..." className="img-rounded" />
          <img src="./images/" alt="..." className="img-rounded" />
        </div>
      </div>
    );
  }
}