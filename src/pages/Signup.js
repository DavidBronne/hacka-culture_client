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
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>

          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />

          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />

          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={this.handleChange}
          />

          <label>Skills:</label>
          <select name="skills" value={skills} onChange={this.handleChange} multiple>
              <option value="data">data</option>
              <option value="WebDev">WebDev</option>
              <option value="UXUI">UXUI</option>
          </select>

          <label>Prefered Project Category:</label>
          <select name="preferedProject" value={preferedProject} onChange={this.handleChange} multiple>
              <option value="NGO">NGO</option>
              <option value="Hackathon">Hackathon</option>
              <option value="Business">Business</option>
          </select>
          
          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
