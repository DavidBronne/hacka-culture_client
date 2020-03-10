import React , { Component } from "react";
import { withAuth } from "./../lib/Auth";

import { Link } from "react-router-dom";

import userService from "./../lib/user-service";

import ParticipantDashboardCard from "./../components/ParticipantDashboardCard"

class ParticipantDashboard extends Component {
    
    state = {
        appliedOnProject: [],
        acceptedOnProject:[]
        //[aaaaadddddazzzzz,qqqqqqqqqq]
        //[5e623b502540e5986089d876,5e623c948776f098c17108bd]
   
    }
    
    componentDidMount () {
        const { _id } = this.props.user;
        userService.getOne(_id)
            .then( (user) => {
                // console.log('user', user.iniatorOnProject)
                this.setState({
                    appliedOnProject: user.appliedOnProject,
                    acceptedOnProject: user.acceptedOnProject
                })
            })
            .catch((error) => console.log('error', error))
    }
    
    render () {
        return (
            <div>
                <h1>Participant Dashboard</h1>

                <Link to="/participant-seek-project">
                    <h4>Seek for Project</h4>
                </Link>
                
                <h3>My applied Projects</h3>
                    {
                        this.state.appliedOnProject.map( (project) => {
                            
                            return <ParticipantDashboardCard key={project._id} {...project}/>
                        })
                    }

                <h3>My accepted Projects</h3>
                    {
                        this.state.acceptedOnProject.map( (project) => {
                            
                            return <ParticipantDashboardCard key={project._id} {...project}/>
                        })
                    }
            </div>
        )
    }
}

export default withAuth(ParticipantDashboard);