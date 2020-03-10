import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

import projectService from "./../lib/project-service";
import userService from "./../lib/user-service";

import AppliedParticipantsCard from "./../components/AppliedParticipantsCard";
import AcceptedParticipantsCard from "./../components/AcceptedParticipantsCard";

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
            acceptedParticipants:"",
            isLoading:true
     }
    
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log('ID', id)
        
        projectService.getOne(id)
            .then((project) => {
                console.log('project in mount', project)
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
                    acceptedParticipants,
                    isLoading:false
                } )

                console.log('this.state', this.state)
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

        const projectToUpdate = {projectName,
            description,
            initiator,
            githubUrl,
            status,  
            location,			
            projectCategory,
            requiredDataSkill,			
            requiredWebdevSkill,		
            requiredUxuiSkill }
    
            const { id } = this.props.match.params
        projectService.updateProject(id, projectToUpdate)
        
        .then((updatedProject) => {
          console.log('updatedUser', updatedProject)
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
                        value={this.state.projectName}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <input
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>GithubUrl</label>
                        <input
                        type="text"
                        name="githubUrl"
                        value={this.state.githubUrl}
                        readOnly
                        />
                    </div>
                    <div>
                        <label>Status</label>
                        <select name="status" value={this.state.status} onChange={this.handleChange} multiple>
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
                        value={this.state.location}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Project Category</label>
                        <select name="projectCategory" value={this.state.projectCategory} onChange={this.handleChange} multiple>
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
                        value={this.state.requiredDataSkill}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                    <label>Required Webdev Skill</label>
                        <input
                        type="text"
                        name="requiredWebdevSkill"
                        value={this.state.requiredWebdevSkill}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Required Uxui Skill</label>
                        <input
                        type="text"
                        name="requiredUxuiSkill"
                        value={this.state.requiredUxuiSkill}
                        onChange={this.handleChange}
                        />
                    </div>
                    
                    <input type="submit" value="Save" />
                </form>

                <h3>Applicant</h3>
                    {
                        this.state.isLoading
                    ? null
                    :
                    this.state.appliedParticipants.map( (user) => {  
                        return <AppliedParticipantsCard {...user}/>
                    })
                    }
                    
                <h3>Accepted</h3>
                    {
                        this.state.isLoading
                    ? null
                    :
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