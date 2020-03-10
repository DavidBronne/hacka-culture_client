import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/Auth";
import userService from "../lib/user-service"
import projectService from "../lib/project-service"

import { render } from "@testing-library/react";

class ParticipantDashboardCard extends Component{
    state = {
        project:null
    }

    componentDidMount() {
        const { _id } = this.props.project
        projectService.getOne( {_id} )
            .then((project) => {
                this.setState({project:project})
            })
            .catch((error) => console.log('error', error))
    }

    render() {
        return (
            <div>
                <Link to="/initiator-edit-project/:_id">
                    <h4>{ this.state.project.projectName }</h4>
                    <h4>{ this.state.project.projectCategory }</h4>
                </Link>   
            </div>
        )
    }

} 

export default withAuth(ParticipantDashboardCard)