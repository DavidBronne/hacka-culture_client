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
                <h4 className="navbar-button">{user.firstName}</h4>
              </Link>
              
              <Link className="navbar-item" to={"/"} id="home-btn">
                <h4>
                
                <img src="https://pngriver.com/wp-content/uploads/2018/04/Download-Peace-Symbol-PNG-Image.png" alt="Home"></img>
                </h4>
              </Link>

              <button className="navbar-button" onClick={logout}>Logout</button>
            </>
          ) 
          
          : (
            <>
              <Link className="navbar-item" to="/login">
                {" "}
                <button className="button is-rounded">Login</button>{" "}
              </Link>
              <br />
              
              <Link className="navbar-item" to={"/"} id="home-btn">
              <img src="https://pngriver.com/wp-content/uploads/2018/04/Download-Peace-Symbol-PNG-Image.png" alt="Home"></img>
              </Link>
              
              <Link to="/signup">
                {" "}
                <button className="button is-rounded">Sign Up</button>{" "}
              </Link>
            </>
          )}
        </nav>

        </div>
    );
  }
}

export default withAuth(Navbar);
