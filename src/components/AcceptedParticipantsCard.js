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
                <div className="card">
                    <div className="card-content">
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
                    </div>
                </div>

                </Link>
                

            </div>
        )
    }

} 

export default withAuth(AcceptedParticipantsCard)