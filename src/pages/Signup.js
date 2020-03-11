import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Signup extends Component {
  state = { 
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    skills: "",
    preferedProject: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email, password, location, skills, preferedProject } = this.state;

    this.props.signup(firstName, lastName, email, password, location, skills, preferedProject)
  };

  handleChange = event => {
    let { name, value, type, options } = event.target;

    if(type==="select-multiple") {
      value = [];
      for (var i = 0; i < options.length; i++) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      console.log('value multi select', value);
    }
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName, email, password, location, skills, preferedProject } = this.state;
    return (
      <div className="field">
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>

          <label className="label">Last Name:</label>
          <input className="input"
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />

          <label className="label">First Name:</label>
          <input className="input"
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />

          <label className="label">Email:</label>
          <input className="input"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <label className="label">Password:</label>
          <input className="input"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <label className="label">Location:</label>
          <input className="input"
            type="text"
            name="location"
            value={location}
            onChange={this.handleChange}
          />

          <label className="label">Skills:</label>
          <div className="select is-multiple">
            <select name="skills" value={skills} onChange={this.handleChange} multiple>
                <option value="data">data</option>
                <option value="WebDev">WebDev</option>
                <option value="UXUI">UXUI</option>
            </select>
          </div>

          <label className="label">Prefered Project Category:</label>
          <div className="select is-multiple">
            <select name="preferedProject" value={preferedProject} onChange={this.handleChange} multiple>
                <option value="NGO">NGO</option>
                <option value="Hackathon">Hackathon</option>
                <option value="Business">Business</option>
            </select>
          </div>

          <div className="field">
           <input className="button is-info is-outlined" type="submit" value="Signup" />
          </div>

        </form>

        <p>Already have account? <Link to={"/login"}> Login</Link></p>
        
      </div>
    );
  }
}

export default withAuth(Signup);
