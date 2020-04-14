import React from "react";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Gadda gey!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit} style={{marginLeft: '4%', backgroundColor:'#EEE'}}>
        <p>
          <label className="form-lable">
           Kû migaq  : <input type="text" name="name" value={name} onChange={this.handleChange} style={{marginTop: '1rem', height: '26px', textAlign: 'left', fontFamily: 'Satisfy'}}/>
          </label>
        </p>
        <p>
          <label>
           Kû Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Ayyufta: <textarea name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Rub</button>
        </p>
      </form>
    );
  }
}
export default Contact;
