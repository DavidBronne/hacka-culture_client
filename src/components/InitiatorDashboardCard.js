import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/Auth";
import userService from "../lib/user-service"
import projectService from "../lib/project-service"

import { render } from "@testing-library/react";

class InitiatorDashboardCard extends Component{
    
    

    render() {
        console.log('PTOPS', this.props._id)
        console.log('TYPE', typeof this.props._id)
        return (
            <div >
                <Link to={`/initiator-edit-project/${this.props._id}`}>
                    <h4>{ this.props.projectName }</h4>
                    <h4>{ this.props.projectCategory }</h4>
                    <h4>{ this.props.requiredDataSkill }</h4>
                    <h4>{ this.props.requiredWebdevSkill }</h4>
                    <h4>{ this.props.requiredUxuiSkill }</h4>
                </Link>
                
            </div>
        )
    }

} 

export default withAuth(InitiatorDashboardCard)