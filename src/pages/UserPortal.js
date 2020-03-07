import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class UserPortal extends Component {
  render() {
    return (
      <div>
        <h1>User Portal</h1>
        <h1>Welcome {this.props.user.email}</h1>
      </div>
    );
  }
}

export default withAuth(UserPortal);
