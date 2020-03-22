import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/Auth";
import userService from "../lib/user-service"
import projectService from "../lib/project-service"

import { render } from "@testing-library/react";

class ParticipantSeekProjectCard extends Component{


    render() {
        // console.log('PTOPS', this.props._id)
        // console.log('TYPE', typeof this.props._id)
        return (
            <div >
                <Link to={`/participant-edit-project/${this.props._id}`}>

                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                    <img src="https://previews.123rf.com/images/nikolae/nikolae1402/nikolae140200006/26042457-ic%C3%B4ne-d-ampoule-isol%C3%A9-sur-fond-blanc.jpg" alt="Project Icon"></img>
                                    </figure>
                                 </div>
                                <div className="media-content">
                                    <p className="title is-5">{ this.props.projectName }</p>
                                    <p className="subtitle is-6">{ this.props.projectCategory }</p>
                                </div>
                            </div>
                            <div className="content field is-grouped">
                                <p>Data: { this.props.requiredDataSkill }</p>
                                <p>WebDev: { this.props.requiredWebdevSkill }</p>
                                <p>UxUi: { this.props.requiredUxuiSkill }</p>
                            </div>
                        </div>
                    </div>


                </Link>
                
            </div>
        )
    }

} 

export default withAuth(ParticipantSeekProjectCard)