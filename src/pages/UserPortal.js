import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";

class UserPortal extends Component {
  
  render() {
    return (
      <div className="container is-fluid">
        <div className="notification has-text-centered">
        <h1 className="title" >User Portal</h1>
        
        <div className="content field">
          <div className="control">
            <Link className="button is-link" to={"/initiator-dashboard"} >
              <h4>Initiate</h4>
            </Link>

            <Link className="button is-link" to={"/participant-dashboard"}>
              <h4>Participate</h4>
            </Link>

            <Link className="button is-link" to={"/seek-users"}>
              <h4>Skills</h4>
            </Link>
          </div>
        </div>
        
        </div> 
      </div>
    );
  }
}

export default withAuth(UserPortal);
