import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";

class UserPortal extends Component {
  
  render() {
    return (
      <div>
        <h1>User Portal</h1>
        
        <Link to={"/initiator-dashboard"} >
          <h4>Initiate</h4>
        </Link>

        <Link to={"/participant-dashboard"}>
          <h4>Participate</h4>
        </Link>

        <Link to={"/seek-users"}>
          <h4>Profiles</h4>
        </Link>

        
        <h1>Welcome {this.props.user.email}</h1>
      </div>
    );
  }
}

export default withAuth(UserPortal);
