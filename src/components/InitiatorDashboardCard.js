import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/Auth";
import userService from "../lib/user-service"
import projectService from "../lib/project-service"

import { render } from "@testing-library/react";

class InitiatorDashboardCard extends Component{
    
    

    render() {
        
            
            
        
  

        
    
        return (
            <div>
                <Link to={`/initiator-edit-project/${this.props._id}`}>
                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src="https://lh3.googleusercontent.com/proxy/NmDDqDhBPFomKS6bsf1XhAypNivvS_trWN3uYVdQkJTHi50t50u7aNPOdrquYZ-Mbx-L3iQ6SH9f88D4OttUd9wwT_Y7Uas" alt="Placeholder image"></img>
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

export default withAuth(InitiatorDashboardCard)