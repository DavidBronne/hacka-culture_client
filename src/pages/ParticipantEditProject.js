import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

import projectService from "./../lib/project-service";
import userService from "./../lib/user-service";

import ParticipantEditPropjectCard from "./../components/ParticipantEditPropjectCard";

class ParticipantEditProject extends Component {
    render () {
        return (
            <di>
                <h1>Participant Edit Project</h1>
                <h3>Project Details</h3>

                <form></form>

                // button: Back to seek project page
                // button: Apply

                <h3>Accepted participants</h3>
                

            </di>
        )
    }
}

export default withAuth(ParticipantEditProject);