import React, { Component } from "react";
import { withAuth } from "./../lib/Auth"
import userService from "./../lib/user-service";
import AcceptedParticipantsCard from "./../components/AcceptedParticipantsCard";


class SeekUsers extends Component {
    state = {

        location:"",
        skills:"",
        preferedProject:"",
        allUsers: [],
        filteredUsers:[],
        isLoading: true
    }

    componentDidMount() {
        this.getAllUsers()
        
    }

    getAllUsers = () => {
        userService.getAll()
        .then((allUsers) => {
            this.setState( {allUsers, filteredUsers: allUsers, isLoading:false } ) 
            })
        .catch((error) => console.log(error)) 
    } 
    
    handleFormSubmit = event => {
        event.preventDefault();
        this.userFilter(this.state.allUsers)
       
    }
    
    userFilter = allUsers => {

        const { 
            location,
            skills,
            preferedProject,
        } = this.state;
        
        if(!location && !skills && !preferedProject ) {
            this.getAllUsers()
        } else {
            
            
            const filteredUsers = allUsers.filter((user) => {
                // console.log('user', user)
                return (user.skills.some(skill => this.state.skills.includes(skill)) &&	
                user.preferedProject.some(project => this.state.preferedProject.includes(project))   &&
                user.location === this.state.location)
            })
    
            this.setState({filteredUsers})
        }
        
    }


      handleChange = event => {
        let { name, value, type, options } = event.target;
        
        if(type==="select-multiple") {
          value = [];
          for (var i = 0; i < options.length; i++) {
            if (options[i].selected) {
              value.push(options[i].value);
              
            }
          }
          // console.log('value multi select', value);
        }
        
        this.setState({ [name]: value });
        // console.log('this.state after mutate', this.state)
      }
      
    
    
    render () {
        return (
            <div className="level">
                <h1 className="title level-item">Seek for Skills</h1>
                <div className="field">
                    <form onSubmit={this.handleFormSubmit}>

                        <div>
                            <label className="label">Location</label>
                            <div className="control">
                            <input className="input"
                            type="text"
                            name="location"
                            value={this.state.location}
                            onChange={this.handleChange}
                            />
                        </div>
                        </div>
                        <div>
                            <label className="label">Skills</label>
                            <div className="control">
                            <div className="select">
                            <select name="skills" value={this.state.skills} onChange={this.handleChange} multiple>
                                <option value="data">data</option>
                                <option value="WebDev">WebDev</option>
                                <option value="UXUI">UXUI</option>
                            </select>
                            </div>
                            </div>
                        </div>
                        <div>
                            <label className="label">Prefered Project Category</label>
                            <div className="control">
                            <div className="select">
                            <select name="preferedProject" value={this.state.preferedProject} onChange={this.handleChange} multiple>
                                <option value="NGO">NGO</option>
                                <option value="Hackathon">Hackathon</option>
                                <option value="Business">Business</option>
                            </select>
                            </div>
                            </div>
                        </div>
                        <div className="control">
                            <input className="button is-link" type="submit" value="Filter" />
                        </div>
                    </form>
                </div>

                <h3 className="subtitle">Result</h3>
                { 
                    
                    this.state.isLoading 
                    ? null    
                    :   this.state.filteredUsers
                            .map( (user) => {
                            
                            return <AcceptedParticipantsCard key={ user._id } {...user}/>
                    
                       
                    })
                    
                    
                    
                }


                
            </div>
        )
    }
}
export default withAuth(SeekUsers);