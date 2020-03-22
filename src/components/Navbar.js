import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedIn } = this.props;

    return (
      <div>
          {isLoggedIn   
          ? (
               <>
                   <nav className="navbar">
                      <div className="navbar-menu is-active">
                          <Link className="navbar-item" to={"/user-profile-edit"}>
                              <h4>{user.firstName}</h4>
                          </Link>
                          <Link className="navbar-item" to={"/"} id="home-btn">
                                <span className="icon is-large">
                                    <i class="fas fa-peace fa-3x"></i>
                                </span>
                         </Link>
                          <div className="navbar-item" onClick={logout}>Logout</div>
                      </div>
            
                    </nav>
                </>
            )       
            : (
                <>
                    <nav className="navbar">
                        <div className="navbar-menu is-active">
                            <Link className="navbar-item" to="/login">
                                <div >Login</div>
                            </Link>
                            <Link className="navbar-item" to={"/"} id="home-btn">
                                <span className="icon is-large">
                                    <i class="fas fa-peace fa-3x"></i>
                                </span>
                            </Link>
                            <Link className="navbar-item" to="/signup"> 
                                <div>Sign Up</div>
                            </Link>
                        </div>
                    </nav>
                </>
              )}

        </div>
    );
  }
}

export default withAuth(Navbar);
