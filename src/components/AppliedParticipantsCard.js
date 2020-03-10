import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import userService from "./../lib/user-service"
import projectService from "./../lib/project-service"

import { render } from "@testing-library/react";

class AppliedParticipantsCard extends Component{
    acceptSubmit = (event) => {
        event.preventDefault();
        const userId = this.props._id
        const projectId = this.props.projectId
        console.log('this.props.match.params', this.props.projectId)
        projectService.acceptParticipant(projectId, userId)
        .then((result) => console.log('result', result))
        .catch(error => console.log('error', error))
        
    }

    declineSubmit = () => {
        
        projectService.declineParticipant()
    }

    render() {
        return (
            <div>
                <Link to={`/see-user-detail/${this.props._id}`}>
                    <h4>{ this.props.firstName }</h4>
                    <h4>{ this.props.skills }</h4>
                </Link>
                
                <form onSubmit={this.acceptSubmit}>
                    <button type="submit">Accept</button>
                </form>

                <form onSubmit={this.declineSubmit}>
                    <button type="submit">Decline</button>
                </form>
                
                //Accept button -> onCLick: related backEnd routes
                //Decline button -> onCLick: related backEnd routes

            </div>
        )
    }

} 

export default withAuth(AppliedParticipantsCard)