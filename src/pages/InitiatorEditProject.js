import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class InitiatorEditProject extends Component {
    
    
    
    render () {
        return (
            <div>
                <h1>Initiator Edit Project</h1>
            </div>
        )
    }
}

export default withAuth(InitiatorEditProject);