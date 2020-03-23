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
                <div className="card">
                    <div className="card-content apllied-participant-card">
                        <Link to={`/see-user-detail/${this.props._id}`}>
                                            <div className="media">
                                                <div className="media-left">
                                                    <figure className="image is-48x48">
                                                        <img src="https://secondchancetinyhomes.org/wp-content/uploads/2016/09/empty-profile.png" alt="Placeholder image"></img>
                                                    </figure>
                                                </div>
                                                <div className="media-content">
                                                    <p className="title is-5">{ this.props.firstName }</p>
                                                    <p className="subtitle is-6">{ this.props.skills }</p>
                                                </div>
                                            </div>
                        </Link>
                        <div className="content field">
                            <div className="control">
                                <form onSubmit={this.acceptSubmit}>
                                    <button className="button is-info is-outlined" type="submit">Accept</button>
                                </form>
                                <form onSubmit={this.declineSubmit}>
                                    <button className="button is-link is-light" type="submit">Decline</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

} 

export default withAuth(AppliedParticipantsCard)