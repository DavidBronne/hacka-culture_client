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
        
        <div className="container is-fluid">
            <div className="notification level">
                <h1 className="title is-2 level-item" >Participant Dashboard</h1>

                <div className=" field level-item">
                    <div className="control">
                        <Link className="button is-info is-outlined" to="/participant-seek-project">
                            <h4>Seek for Project</h4>
                        </Link>
                    </div>
                </div>
                
                <h3 className="subtitle is-3" >My applied Projects:</h3>
                    {
                        this.state.appliedOnProject.map( (project) => {
                            
                            return <ParticipantDashboardCard key={project._id} {...project}/>
                        })
                    }

                <h3 className="subtitle is-3" >My accepted Projects:</h3>

                    {
                        this.state.acceptedOnProject.map( (project) => {
                            
                            return <ParticipantDashboardCard key={project._id} {...project}/>
                        })
                    }
            </div>
        </div>
        )
    }
}

export default withAuth(ParticipantDashboard);