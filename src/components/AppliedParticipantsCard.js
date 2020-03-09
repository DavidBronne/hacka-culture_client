import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import userService from "./../lib/user-service"
import projectService from "./../lib/project-service"

import { render } from "@testing-library/react";

class AppliedParticipantsCard extends Component{
    state = {
        user:null
    }

    componentDidMount() {
        const { _id } = this.props.user
        userService.getOne( {_id} )
            .then((user) => {
                this.setState({user:user})
            })
            .catch((error) => console.log('error', error))
    }

    render() {
        return (
            <div>
                <Link to="/see-user-detail/:id">
                    <h4>{ this.state.user.firstName }</h4>
                    <h4>{ this.state.user.skills }</h4>
                </Link>
                //Accept button -> onCLick: related backEnd routes
                //Decline button -> onCLick: related backEnd routes

            </div>
        )
    }

} 

export default withAuth(AppliedParticipantsCard)