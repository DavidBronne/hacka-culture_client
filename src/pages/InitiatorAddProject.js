import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class InitiatorAddProject extends Component {
    render() {
        return (
            <div>
                <h1>Initiator Add Project</h1>
            </div>
        )
    }
}
export default withAuth(InitiatorAddProject);