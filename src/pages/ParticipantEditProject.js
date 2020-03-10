import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";

import projectService from "./../lib/project-service";
import userService from "./../lib/user-service";

import ParticipantEditPropjectCard from "./../components/ParticipantEditPropjectCard";

class ParticipantEditProject extends Component {
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
        const { id } = this.props.match.params
    projectService.applyToProject(id)
    
    .then((updatedProject) => {
      console.log('updatedProject', updatedProject)
      this.props.history.push("/participant-dashboard")
    })
    .catch((error) => console.log(error))
}
    
    
    
    
    render () {
        return (
            <di>
                <h1>Participant Edit Project</h1>
                <h3>Project Details</h3>

                <p>{this.state.projectName}</p>

                <form onSubmit={this.handleFormSubmit}>
                    <button type="submit">Apply</button>
                </form>

                // button: Apply
                
                <Link to="/participant-seek-project">
                    <h4>Seek Project</h4>
                </Link>

                <h3>Accepted participants</h3>
                

            </di>
        )
    }
}

export default withAuth(ParticipantEditProject);