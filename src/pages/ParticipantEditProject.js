import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class ParticipantEditProject extends Component {
    render () {
        return (
            <di>
                <h1>Participant Edit Project</h1>
            </di>
        )
    }
}

export default withAuth(ParticipantEditProject);