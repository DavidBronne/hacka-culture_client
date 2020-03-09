import React , { Component } from "react";
import { withAuth } from "./../lib/Auth";

import { Link } from "react-router-dom";

import userService from "./../lib/user-service"

import InitiatorDashboardCard from "./../components/InitiatorDashboardProjectCard"

class InitiatorDashboard extends Component {
    
    state = {
        projects: null
        //[aaaaadddddazzzzz,qqqqqqqqqq]
        //[5e623b502540e5986089d876,5e623c948776f098c17108bd]
        
    }

    componentDidMount () {
        const { _id } = this.props.user;
        userService.getOne(_id)
            .then( (user) => {
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
 
                {
                    this.state.projects.map( (project) => {
                        
                        return <InitiatorDashboardCard {...project}/>
                    })
                }
   
            </div>
        )
    }
 }

 export default withAuth(InitiatorDashboard);