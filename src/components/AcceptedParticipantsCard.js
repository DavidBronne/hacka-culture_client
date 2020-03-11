import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import userService from "./../lib/user-service"
import projectService from "./../lib/project-service"

import { render } from "@testing-library/react";

class AcceptedParticipantsCard extends Component{


    render() {
        return (
            <div>
                <Link to={`/see-user-detail/${this.props._id}`}>
                    <h4>{ this.props.firstName }</h4>
                    <h4>skills: { this.props.skills }</h4>
                    <h4>prefered projects: { this.props.preferedProject }</h4>
                    <h4>Location: { this.props.location }</h4>
                </Link>
                

            </div>
        )
    }

} 

export default withAuth(AcceptedParticipantsCard)