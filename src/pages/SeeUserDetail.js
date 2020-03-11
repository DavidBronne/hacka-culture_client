import React , { Component } from "react";
import { withAuth } from "./../lib/Auth";

import userService from "./../lib/user-service";


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
                console.log('this state', this.state)
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
                {/* <p>{
                this.state.initiatorOnProject[0]
                }</p> */}
                {/* <p>{
                [this.state.initiatorOnProject]
                }</p> */}
                <h5>applied On Projects</h5>
                {/* <p>{this.state.appliedOnProject}</p> */}
                <h5>accepted On Projects</h5>
                {/* <p>{this.state.acceptedOnProject}</p> */}
            </div>
        )
    }
}
export default withAuth(SeeUserDetail);