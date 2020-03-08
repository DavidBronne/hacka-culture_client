import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;

    return (
      <nav className="navbar">
        
        {isLoggedIn 
        
        ? (
          <>
            <Link to={"/user-profile-edit"}>
              <p>Email: {user.email}</p>
            </Link>
            
            <Link to={"/"} id="home-btn">
              <h4>Home</h4>
            </Link>

            <button onClick={logout}>Logout</button>
          </>
        ) 
        
        : (
          <>
            <Link to="/login">
              {" "}
              <button className="navbar-button">Login</button>{" "}
            </Link>
            <br />
            
            <Link to={"/"} id="home-btn">
              <h4>Home</h4>
            </Link>
            
            <Link to="/signup">
              {" "}
              <button className="navbar-button">Sign Up</button>{" "}
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
