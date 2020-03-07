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

    this.props.signup(firstName, lastName, email, password, location, skills, preferedProject);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName, email, password, location, skills, preferedProject } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>

          <label>LastName:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />

          <label>FirstName:</label>
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
          <input
            type="text"
            name="skills"
            value={skills}
            onChange={this.handleChange}
          />

          <label>Prefered Project Category:</label>
          <input
            type="text"
            name="preferedProject"
            value={preferedProject}
            onChange={this.handleChange}
          />
          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
