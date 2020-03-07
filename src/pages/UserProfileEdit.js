import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class UserProfileEdit extends Component {
  render() {
    return (
      <div>
        <h1>UserProfileEdit</h1>
        
      </div>
    );
  }
}

export default withAuth(UserProfileEdit);
