import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/Auth";
import userService from "../lib/user-service"
import projectService from "../lib/project-service"

import { render } from "@testing-library/react";

class ParticipantDashboardCard extends Component{


    componentDidMount() {}


    render() {
        return (
            <div>
                <Link to={`/participant-edit-project/${this.props._id}`}>
                    <h4>{ this.props.projectName }</h4>
                    <h4>{ this.props.projectCategory }</h4>
                </Link>   
            </div>
        )
    }

} 

export default withAuth(ParticipantDashboardCard)