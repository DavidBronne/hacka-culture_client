import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;

    return (
      <div>
        <nav className="navbar">
          
          {isLoggedIn 
          
          ? (
            <>
              <Link className="navbar-item" to={"/user-profile-edit"}>
                <h4>{user.firstName}</h4>
              </Link>
              
              <Link className="navbar-item" to={"/"} id="home-btn">
                <h4>Home</h4>
              </Link>

              <button className="navbar-button" onClick={logout}>Logout</button>
            </>
          ) 
          
          : (
            <>
              <Link className="navbar-item" to="/login">
                {" "}
                <button className="navbar-button">Login</button>{" "}
              </Link>
              <br />
              
              <Link className="navbar-item" to={"/"} id="home-btn">
                <h4>Home</h4>
              </Link>
              
              <Link to="/signup">
                {" "}
                <button className="navbar-button">Sign Up</button>{" "}
              </Link>
            </>
          )}
        </nav>

        </div>
    );
  }
}

export default withAuth(Navbar);
