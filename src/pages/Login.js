import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.login(email, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="field">
        <h1>Login</h1>

        <form onSubmit={this.handleFormSubmit}>
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

          <input className="button is-info is-outlined" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
