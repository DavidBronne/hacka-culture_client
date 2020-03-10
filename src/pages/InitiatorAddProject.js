import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";

import projectService from "./../lib/project-service";

class InitiatorAddProject extends Component {
    
    state = {
        projectName: "",
        description: "",
        // initiator: "",
        githubUrl: "",
        status: "planning",  
        location: "",			
        projectCategory: "NGO",
        requiredDataSkill: "",			
        requiredWebdevSkill: "",		
        requiredUxuiSkill: ""
    }
    
    

  
    
    handleFormSubmit = event => {
        event.preventDefault();
        
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

        console.log('this.state for creating', this.state)


        
        projectService.createProject({
            projectName,
            description,
            initiator: this.props.user._id,
            githubUrl,
            status,  
            location,			
            projectCategory,
            requiredDataSkill,			
            requiredWebdevSkill,		
            requiredUxuiSkill
        })
        .then(this.props.history.push(`/initiator-dashboard`))
        .catch((error) => console.log('error', error))
    }
    
    handleChange = event => {
        let { name, value, type, options } = event.target;
        console.log('type', type)
        
        this.setState({ [name]: value });
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
                    <div>
                        <label>Project Name</label>
                        <input
                        type="text"
                        name="projectName"
                        value={projectName}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>GithubUrl</label>
                        <input
                        type="text"
                        name="githubUrl"
                        value={githubUrl}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Status</label>
                        <select name="status" value={status} onChange={this.handleChange} >
                            <option value="planning">planning</option>
                            <option value="execution">execution</option>
                            <option value="closed">closed</option>
                        </select>
                    </div>
                    <div>
                        <label>Location</label>
                        <input
                        type="text"
                        name="location"
                        value={location}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Project Category</label>
                        <select name="projectCategory" value={projectCategory} onChange={this.handleChange} >
                            <option value="NGO">NGO</option>
                            <option value="Hackathon">Hackathon</option>
                            <option value="Business">Business</option>
                        </select>
                    </div>
                    <div>
                    <label>Required Data Skill</label>
                        <input
                        type="number"
                        name="requiredDataSkill"
                        value={requiredDataSkill}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                    <label>Required Webdev Skill</label>
                        <input
                        type="number"
                        name="requiredWebdevSkill"
                        value={requiredWebdevSkill}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Required Uxui Skill</label>
                        <input
                        type="number"
                        name="requiredUxuiSkill"
                        value={requiredUxuiSkill}
                        onChange={this.handleChange}
                        />
                    </div>
                    
                    <input type="submit" value="Kick off" />
                </form>
            
                <Link to={"/initiator-dashboard"}> Don't Create</Link>
            </div>
        )
    }
}
export default withAuth(InitiatorAddProject);