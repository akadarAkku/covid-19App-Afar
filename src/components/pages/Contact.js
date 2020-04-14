import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section className="contact-page py-5">
        <div className="container">
          <div className="row location">
            
            <div className="col-md-6">
              <h4>
                <strong>Neh uktuba</strong>
              </h4>
              <form name="contact" method="post" data-netlify="true"
              data-netlify-honeypot="bot-field">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Migaq akkel hayis"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Kû Email akkel hayis"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Isi Nibro akkel hayis"
                  />
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      cols="30"
                      rows="3"
                      placeholder="Ayyufta akkel hayis"
                    />
                  </div>
                </div>
                <button
                  className="btn btn-outline-primary  text-uppercase mt-1"
                  type="submit"
                >
                  <i className="fa fa-paper-plane-o" aria-hidden="true" />
                  &nbsp;Rub
                </button>
              </form>
              <link to="/Home">Gadda geyaay, ugtuma fanah uduur.</link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
