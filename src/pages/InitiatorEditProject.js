import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

import projectService from "./../lib/project-service";

import AppliedParticipantsCard from "./../component/AppliedParticipantsCard";
import AcceptedParticipantsCard from "./../component/AcceptedParticipantsCard";

class InitiatorEditProject extends Component {
     state = {
            projectName:"",
            description:"",
            initiator:"",
            githubUrl:"",
            status:"",  
            location:"",			
            projectCategory:"",
            requiredDataSkill:"",			
            requiredWebdevSkill:"",		
            requiredUxuiSkill:"",
            appliedParticipants:"",
            acceptedParticipants:""
     }
    
    componentDidMount() {
        const { id } = this.props.match.params;
        
        projectService.getOne( {id} )
            .then((project) => {
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
                    requiredUxuiSkill,     
                    appliedParticipants,
                    acceptedParticipants
                } = project;
                
                this.setState( 
                    { projectName,
                    description,
                    initiator,
                    githubUrl,
                    status,  
                    location,			
                    projectCategory,
                    requiredDataSkill,			
                    requiredWebdevSkill,		
                    requiredUxuiSkill, 
                    appliedParticipants,
                    acceptedParticipants} )
            })
            .catch((err) => {
                console.log(err)})
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
    
        userService.updateProject({
            projectName,
            description,
            initiator,
            githubUrl,
            status,  
            location,			
            projectCategory,
            requiredDataSkill,			
            requiredWebdevSkill,		
            requiredUxuiSkill}
        )
        .then((updatedProject) => {
          console.log('updateUser', updatedProject)
        })
        .catch((error) => console.log(error))
    }
    
    handleChange = event => {
        let { name, value, type, options } = event.target;
        
        if(type==="select-multiple") {
          value = [];
          for (var i = 0; i < options.length; i++) {
            if (options[i].selected) {
              value.push(options[i].value); 
            }
          }
        }
        this.setState({ [name]: value });
    } 

    render () {
        return (
            <div>
                <h1>Initiator Edit Project</h1>
            
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
                        //onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Status</label>
                        <select name="status" value={status} onChange={this.handleChange} multiple>
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
                        <select name="projectCategory" value={projectCategory} onChange={this.handleChange} multiple>
                            <option value="NGO">NGO</option>
                            <option value="Hackathon">Hackathon</option>
                            <option value="Business">Business</option>
                        </select>
                    </div>
                    <div>
                    <label>Required Data Skill</label>
                        <input
                        type="text"
                        name="requiredDataSkill"
                        value={requiredDataSkill}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                    <label>Required Webdev Skill</label>
                        <input
                        type="text"
                        name="requiredWebdevSkill"
                        value={requiredWebdevSkill}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Required Uxui Skill</label>
                        <input
                        type="text"
                        name="requiredUxuiSkill"
                        value={requiredUxuiSkill}
                        onChange={this.handleChange}
                        />
                    </div>
                    
                    <input type="submit" value="Save" />
                </form>

                <h3>Applicants</h3>
                    {
                    this.state.appliedParticipants.map( (user) => {  
                        return <AppliedParticipantsCard {...user}/>
                    })
                    }
                    
                <h3>Applicants</h3>
                    {
                    this.state.acceptedParticipants.map( (user) => {  
                        return <AcceptedParticipantsCard {...user}/>
                    })
                    }
                    
                    // Delete Project button -> onCLick: related backEnd routes

            </div>
        )
    }
}

export default withAuth(InitiatorEditProject);