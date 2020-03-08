import React , { Component } from "react";
import { withAuth } from "./../lib/Auth";

import { Link } from "react-router-dom";

class InitiatorDashboard extends Component {
    render() {
        return (
            <div>
                <h1>Initiator Dashboard</h1>

                <Link to="/initiator-add-project">
                    <h4>Kick a Project off</h4>
                </Link>

                <h3>My Projects as Initiator</h3>

                

            </div>
        );
    }
 }

 export default withAuth(InitiatorDashboard);