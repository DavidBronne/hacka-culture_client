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
            <div className="container is-fluid">
                <div className="level notification">   

                    <h1 className="title is-2 level-item">Participant Edit Project</h1>
                    
                    <div className="box">
                        
                        <h3 className="subtitle is-3">Project Details</h3>

                        <div className="detail">
                            <h5> <b>Project Name: </b> </h5>
                            <p>{this.state.projectName}</p>
                        </div>
                        <div className="detail">
                            <h5> <b>Description: </b> </h5>
                            <p>{this.state.description}</p>
                        </div>
                        <div className="detail">
                            <h5> <b>Initiator: </b> </h5>
                            <p>{this.state.initiator.firstName}</p>
                        </div>

                        <Link to={`/see-user-detail/${this.state.initiator._id}`}>
                            <div className="detail">
                                <h5> <b>Project Name: </b> </h5>
                                <p>{this.state.projectName}</p>
                            </div>
                        </Link>


                        <div className="detail">
                            <h5> <b>Data: </b> </h5>
                            <p>{this.state.requiredDataSkill}</p>
                        </div>
                        <div className="detail">
                            <h5> <b>Webdev: </b> </h5>
                            <p>{this.state.requiredWebdevSkill}</p>
                        </div>
                        <div className="detail">
                            <h5> <b>UxUi: </b> </h5>
                            <p>{this.state.requiredUxuiSkill}</p>
                        </div>
                        
                        <div className="detail">
                            <h5> <b>Github Url: </b> </h5>
                            <p>{this.state.githubUrl}</p>
                        </div>
                       
                    </div>

                    <div className="field level-item">
                        <div className="control">
                            <form onSubmit={this.handleFormSubmit}>
                                <button  className="button is-info is-outlined" type="submit">Apply</button>
                            </form>
                        </div>
                        <div className="control level-item">
                            <Link  className="button is-link is-light" to="/participant-seek-project">
                                <h4>Seek Project</h4>
                            </Link>
                        </div>
                    </div>

                    <h5 className="subtitle is-3">AppliedParticipants</h5>
                    {
                        this.state.isLoading
                        ? null
                        :
                        this.state.appliedParticipants.map((user) => {
                            return <AcceptedParticipantsCard key={user._id} {...user}/>
                            })
                    }

                    <h3 className="subtitle is-3">Accepted participants</h3>
                        {
                            this.state.isLoading
                        ? null
                        :
                        this.state.acceptedParticipants.map( (user) => {  
                            return <AcceptedParticipantsCard key={user._id} {...user}/>
                        })
                        }


                </div>
            </div>
        )
    }
}

export default withAuth(ParticipantEditProject);