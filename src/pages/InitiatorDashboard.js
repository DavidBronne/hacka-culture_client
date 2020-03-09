import React , { Component } from "react";
import { withAuth } from "./../lib/Auth";

import { Link } from "react-router-dom";

import userService from "./../lib/user-service"

class InitiatorDashboard extends Component {
    
    state = {
        projects:null
    }

    componentDidMount () {
        const { _id } = this.props.user;
        userService.getOne(_id)
            .then(user => {
                // console.log('user', user.iniatorOnProject)
                this.setState({projects: user.iniatorOnProject})
            })
            .catch((error) => console.log('error', error))
    }
    
    render() {
        return (
            <div>
                <h1>Initiator Dashboard</h1>

                <Link to="/initiator-add-project">
                    <h4>Kick a Project off</h4>
                </Link>

                <h3>My Projects as Initiator</h3>
                {/* {this.state.projects.map(project => 
                return <ProjectCard {...project}>)} */}
            </div>
        );
    }
 }

 export default withAuth(InitiatorDashboard);