import React , { Component } from "react";
import { withAuth } from "./../lib/Auth";

import userService from "./../lib/user-service";

import ParticipantDashboardCard from "./../components/ParticipantDashboardCard"


class SeeUserDetail extends Component {
    state= {
        "firstName":"",
        "lastName":"",
        "email":"",
        "location":"",
        "skills":"",
        "preferedProject":"",
        "initiatorOnProject":"",
        "appliedOnProject":"",
        "acceptedOnProject":"",
        "isLoading" : true
    }
    
    componentDidMount() {
        const { id } = this.props.match.params;
    
        userService.getOne( id )
            .then( (user) => {
                const {
                    firstName,
                    lastName,
                    email,
                    location,
                    skills,
                    preferedProject,
                    initiatorOnProject,
                    appliedOnProject,
                    acceptedOnProject
                } = user;
                // console.log('USER DETAILS', user)
                this.setState ({
                    firstName,
                    lastName,
                    email,
                    location,
                    skills,
                    preferedProject,
                    initiatorOnProject,
                    appliedOnProject,
                    acceptedOnProject,
                    isLoading : false
                })
                console.log('this state in USER DETAIL', this.state)
            })
            .catch((err) => {
                console.log(err)})
    }
    
    
    render () {
        return (
            <div>
                <h1>See User Detail</h1>

                <h5>firstName</h5>
                <p>{this.state.firstName}</p>
                <h5>lastName</h5>
                <p>{this.state.lastName}</p>
                <h5>email</h5>
                <p>{this.state.email}</p>
                <h5>location</h5>
                <p>{this.state.location}</p>
                <h5>skills</h5>
                <p>{this.state.skills}</p>
                <h5>prefered Project</h5>
                <p>{this.state.preferedProject}</p>
                <h5>initiator On Projects</h5>
                {/* <p>{
                    this.state.initiatorOnProject.map( (project) => { return project.projectName})
                    }</p> */}

                <h3>Initiator on Projects</h3>
                    {
                        this.state.isLoading
                    ? null
                    :
                        this.state.initiatorOnProject.map( (project) => {
                            
                            return <ParticipantDashboardCard key={project._id} {...project}/>
                        })
                    }

                <h3>Applied on Projects</h3>
                    {
                        this.state.isLoading
                    ? null
                    :
                        this.state.appliedOnProject.map( (project) => {
                            
                            return <ParticipantDashboardCard key={project._id} {...project}/>
                        })
                    }
                
                <h3>My accepted Projects</h3>
                    {
                        this.state.isLoading
                    ? null
                    :
                        this.state.acceptedOnProject.map( (project) => {
                            
                            return <ParticipantDashboardCard key={project._id} {...project}/>
                        })
                    }

            </div>
        )
    }
}
export default withAuth(SeeUserDetail);