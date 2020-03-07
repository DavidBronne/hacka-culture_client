import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class ParticipantDashboard extends Component {
    render () {
        return (
            <div>
                <h1>Participant Dashboard</h1>
            </div>
        )
    }
}

export default withAuth(ParticipantDashboard);