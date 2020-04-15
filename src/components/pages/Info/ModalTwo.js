import React, { Component } from 'react'
import './infoPage.module.css';

export default class ModalTwo extends Component {
    render() {
        return (
          <div className="container" style={{marginBottom:'50px'}}>
    
          {/* Button to Open the Modal */}
          <button type="button" className="btn btn-primary" data-toggle="modal1" data-target="#myModal">
          Qado basal kee KOVID-19?
          </button>
          {/* The Modal */}
          <div className="modal fade" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <h4 className="modal-title">AleyaH</h4>
                  <button type="button" className="close" data-dismiss="modal1">×</button>
                </div>
                {/* Modal body */}
                <div className="modal-body">
                <p>Qaalamak qaafiyat egla elle tascassennal qado basal Qaafiyatah kaxxaam meqe 
                  maaqo kinnim takkay immay; away yan KOVID-19 deqsita biyaakak kalalu yakku xiqaamih 
                  Sumaq kak mayana iyyan.</p>
                </div>
                {/* Modal footer */}
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }