import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class ParticipantSeekProject extends Component {
    render () {
        return (
            <div>
                <h1>Participant Seek Project</h1>
            </div>
        )
    }
}
export default withAuth(ParticipantSeekProject);