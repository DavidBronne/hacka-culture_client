import React , { Component } from "react";
import { withAuth } from "./../lib/Auth";

import { Link } from "react-router-dom";

import userService from "./../lib/user-service";

import InitiatorDashboardCard from "../components/InitiatorDashboardCard"

class InitiatorDashboard extends Component {
    
    state = {
        projects: [],
        isLoading: true
        //[aaaaadddddazzzzz,qqqqqqqqqq]
        //[5e623b502540e5986089d876,5e623c948776f098c17108bd]
        
    }

    componentDidMount () {
        const { _id } = this.props.user;
        this.getInitiatorProjects()
    }

    componentDidUpdate (prevState) {
        // if(prevState.projects != this.state.projects) {
        //     this.getInitiatorProjects()
        // }
    }

    getInitiatorProjects = () => {
        const { _id } = this.props.user;
        userService.getOne(_id)
            .then( (user) => {
                // console.log('user', user.iniatorOnProject)
                this.setState({projects: user.initiatorOnProject, isLoading:false})
            })
            .catch((error) => console.log('error', error))
    
        }

    render() {
        return (
            <div className="box">
                <div className="level notification">

                    <h1 className="title is-2 level-item" >Initiator Dashboard</h1>

                    <div className="level-item">
                        <Link className="button is-info is-outlined" to="/initiator-add-project">
                            <h4>Initiate a Project</h4>
                        </Link>
                    </div>

                    <h2 className="subtitle is-3" >My Projects as Initiator</h2>
    
                    { 
                        this.state.isLoading 
                        ? null 
                        : this.state.projects.map( (project) => {
                            console.log('PROJECT', project)
                            return <InitiatorDashboardCard key={ project._id } {...project}/>
                        })
                    }
    
                </div>
            </div>
        )
    }
 }

 export default withAuth(InitiatorDashboard);