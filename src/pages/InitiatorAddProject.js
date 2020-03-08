import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";

import UserProject from "./../lib/project-service";

class InitiatorAddProject extends Component {
    
    state = {
        projectName: "",
        description: "",
        initiator: "",
        githubUrl: "",
        status: "",  
        location: "",			
        projectCategory: "",
        requiredDataSkill: "",			
        requiredWebdevSkill: "",		
        requiredUxuiSkill: ""
    }
    
    componentDidMount () {
        const { user } = this.props;

        this.setState({
            initiator:"user._id"
        })
    }
    
    handleFormSubmit = event => {
    event.preventDefault();
    const { 
        projectName,
        description,
        initiator,
        githubUrl,
        status,  
        location,			
        projectCategory,
        requiredDataSkill,			
        requiredWebdevSkill,		
        requiredUxuiSkill 
    } = this.state;

    this.props.createProject(
        projectName,
        description,
        initiator,
        githubUrl,
        status,  
        location,			
        projectCategory,
        requiredDataSkill,			
        requiredWebdevSkill,		
        requiredUxuiSkill
    )
    }
    
    handelChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    
    render() {
        
        const { 
            projectName,
            description,
            // initiator,
            githubUrl,
            status,  
            location,			
            projectCategory,
            requiredDataSkill,			
            requiredWebdevSkill,		
            requiredUxuiSkill 
        } = this.state;
        
        return (
            <div>
                <h1>Initiator Add Project</h1>

                <form onSubmit={this.handleFormSubmit}>

                <label>Project Name</label>
                <input
                type="text"
                name="projectName"
                value={projectName}
                onChange={this.handleChange}
                />

                <label>Description</label>
                <input
                type="text"
                name="description"
                value={description}
                onChange={this.handleChange}
                />

                <label>GithubUrl</label>
                <input
                type="text"
                name="githubUrl"
                value={githubUrl}
                onChange={this.handleChange}
                />

                <label>Status</label>
                <input
                type="text"
                name="status"
                value={status}
                onChange={this.handleChange}
                />

                <label>Location</label>
                <input
                type="text"
                name="location"
                value={location}
                onChange={this.handleChange}
                />

                <label>Project Category</label>
                <input
                type="text"
                name="projectCategory"
                value={projectCategory}
                onChange={this.handleChange}
                />

                <label>Required Data Skill</label>
                <input
                type="text"
                name="requiredDataSkill"
                value={requiredDataSkill}
                onChange={this.handleChange}
                />

                <label>Required Webdev Skill</label>
                <input
                type="text"
                name="requiredWebdevSkill"
                value={requiredWebdevSkill}
                onChange={this.handleChange}
                />

                <label>Required Uxui Skill</label>
                <input
                type="text"
                name="requiredUxuiSkill"
                value={requiredUxuiSkill}
                onChange={this.handleChange}
                />

                <input type="submit" value="Kick off" />

                </form>
            
                <Link to={"/pages/InitiatorDashboard"}> Dashborad</Link>
            </div>
        )
    }
}
export default withAuth(InitiatorAddProject);