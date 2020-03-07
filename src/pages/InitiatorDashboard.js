import React , { Component } from "react";
import { withAuth } from "./../lib/Auth";

class InitiatorDashboard extends Component {
    render() {
        return (
            <div>
                <h1>Initiator Dashboard</h1>
            </div>
        );
    }
 }

 export default withAuth(InitiatorDashboard);