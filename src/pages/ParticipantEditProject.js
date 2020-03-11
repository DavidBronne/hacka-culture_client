import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";

import projectService from "./../lib/project-service";
import userService from "./../lib/user-service";

import AcceptedParticipantsCard from "./../components/AcceptedParticipantsCard";

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
            
            this.setState({ 
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
                acceptedParticipants,
                isLoading:false
            })

            console.log('this.state in EDIT PROJECT', this.state)
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
            <div>
                <h1>Participant Edit Project</h1>
                
                <h3>Project Details</h3>

                <h5>Project Name</h5>
                <p>{this.state.projectName}</p>
                <h5>description</h5>
                <p>{this.state.description}</p>
                
                <Link to={`/see-user-detail/${this.state.initiator._id}`}>
                <h5>initiator</h5>
                <p>{this.state.initiator.firstName}</p>
                </Link>

                <h5>projectCategory</h5>
                <p>{this.state.projectCategory}</p>
                <h5>requiredDataSkill</h5>
                <p>{this.state.requiredDataSkill}</p>
                <h5>requiredWebdevSkill</h5>
                <p>{this.state.requiredWebdevSkill}</p>
                <h5>requiredUxuiSkill</h5>
                <p>{this.state.requiredUxuiSkill}</p>
                <h5>githubUrl</h5>
                <p>{this.state.githubUrl}</p>
                <h5>appliedParticipants</h5>
                {
                    this.state.isLoading
                    ? null
                    :
                    this.state.appliedParticipants.map((user) => {
                        return <Link to={`/see-user-detail/${user._id}`}>
                        {user.firstName}
                        </Link>})
                }

                <form onSubmit={this.handleFormSubmit}>
                    <button type="submit">Apply</button>
                </form>
                
                <Link to="/participant-seek-project">
                    <h4>Seek Project</h4>
                </Link>

                <h3>Accepted participants</h3>
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

export default withAuth(ParticipantEditProject);