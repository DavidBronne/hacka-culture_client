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
            <div className=" box level">
                <h1 className="title is-2 level-item">See User Detail</h1>
                <div className="box">
                    <div className="detail">
                        <h5> <b>FirstName: </b></h5>
                        <p> {this.state.firstName}</p>
                    </div>
                    <div className="detail">
                        <h5> <b>LastName: </b></h5>
                        <p> {this.state.lastName}</p>
                    </div>
                    <div className="detail">
                        <h5> <b>Email: </b></h5>
                        <p> {this.state.email}</p>
                    </div>
                    <div className="detail">
                        <h5> <b>Location: </b></h5>
                        <p> {this.state.location}</p>
                    </div>
                    <div className="detail">
                        <h5> <b>Skills: </b></h5>
                        <p> {this.state.skills}</p>
                    </div>
                    <div className="detail">
                        <h5> <b>Prefered Projects: </b></h5>
                        <p> {this.state.preferedProject}</p>
                    </div>
                </div>

                <h3 className="subtitle is-3" >Initiator on Projects:</h3>
                    {
                        this.state.isLoading
                    ? null
                    :
                        this.state.initiatorOnProject.map( (project) => {
                            
                            return <ParticipantDashboardCard key={project._id} {...project}/>
                        })
                    }

                <h3 className="subtitle is-3">Applied on Projects:</h3>
                    {
                        this.state.isLoading
                    ? null
                    :
                        this.state.appliedOnProject.map( (project) => {
                            
                            return <ParticipantDashboardCard key={project._id} {...project}/>
                        })
                    }
                
                <h3 className="subtitle is-3">My accepted Projects:</h3>
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