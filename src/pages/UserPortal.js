import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";

class UserPortal extends Component {
  
  render() {
    return (
      <div className="box">
        <div className="home-portal">
            <h1 className="title is-1 level-item" >Portal</h1>
        
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvaAtDfOcnxTLC0dLd8DBE_k0Vw7CaUPv9428FZZE2Sj0J_Zyt" alt="homeLogo"></img>
            
            <div className="home-portal-paragraph">
              <Link to={"/initiator-dashboard"} >
                <h4 className="subtitle is-3">Initiate</h4>
              </Link>
              <Link to={"/participant-dashboard"}>
                <h4 className="subtitle is-3">Participate</h4>
              </Link>
              <Link to={"/seek-users"}>
                <h4 className="subtitle is-3">Seek for Skills</h4>
              </Link>
            </div>
        </div> 
      </div>
    );
  }
}

export default withAuth(UserPortal);
