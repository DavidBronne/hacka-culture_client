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
        
        
        this.setState({ [name]: value });
    } 

    render () {
        return (
    
            <div className="level box notification">
                <h1 className="title is-2 level-item">Initiator Edit Project</h1>
                <div className="field">
                    <form onSubmit={this.handleFormSubmit}>
                        <div>
                            <label className="label">Project Name</label>
                            <div className="control">
                                <input className="input"
                                    type="text"
                                    name="projectName"
                                    value={this.state.projectName}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="label">Status</label>
                            <div className="select">
                                <select name="status" value={this.state.status} onChange={this.handleChange} >
                                    <option value="planning">planning</option>
                                    <option value="execution">execution</option>
                                    <option value="closed">closed</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="label">Project Category</label>
                            <div className="select">
                                <select name="projectCategory" value={this.state.projectCategory} onChange={this.handleChange} >
                                    <option value="NGO">NGO</option>
                                    <option value="Hackathon">Hackathon</option>
                                    <option value="Business">Business</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="skill-project-select">
                            <div className="skill-project-select-item">
                                <label className="label">Data</label>
                                <div className="control">
                                    <input className="input"
                                        type="text"
                                        name="requiredDataSkill"
                                        value={this.state.requiredDataSkill}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="skill-project-select-item">
                                <label className="label">Webdev</label>
                                <div className="control">
                                    <input className="input"
                                        type="text"
                                        name="requiredWebdevSkill"
                                        value={this.state.requiredWebdevSkill}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="skill-project-select-item">
                                <label className="label">UxUi</label>
                                <div className="control">
                                    <input className="input"
                                        type="text"
                                        name="requiredUxuiSkill"
                                        value={this.state.requiredUxuiSkill}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        
                        <div>
                            <label className="label">Location</label>
                            <div className="control">
                                <input className="input"
                                    type="text"
                                    name="location"
                                    value={this.state.location}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="label">Description</label>
                            <div className="control">
                                <input className="input"
                                    type="text"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                />
                            </div>   
                        </div>
                        <div>
                            <label className="label">GithubUrl</label>
                            <div className="control">
                                <input className="input"
                                    type="text"
                                    name="githubUrl"
                                    value={this.state.githubUrl}
                                    readOnly
                                />
                            </div>    
                        </div>
                        
                        <div className="control level-item button-padding">
                                <input className="button is-info is-outlined" type="submit" value="Save" />
                        </div>

                    </form>
                </div>
                
                <h3 className="subtitle is-3">Applicant</h3>
                    {
                        this.state.isLoading
                    ? null
                    :
                    this.state.appliedParticipants.map( (user) => {  
                        return <AppliedParticipantsCard key={user._id} projectId={this.props.match.params.id} {...user}/>
                    })
                    }
                    
                <h3 className="subtitle is-3">Accepted</h3>
                    {
                        this.state.isLoading
                    ? null
                    :
                    this.state.acceptedParticipants.map( (user) => {  
                        return <AcceptedParticipantsCard key={user._id} {...user}/>
                    })
                    }

            </div>
        )
    }
}

export default withAuth(InitiatorEditProject);