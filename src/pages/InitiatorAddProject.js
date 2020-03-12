import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";

import projectService from "./../lib/project-service";

class InitiatorAddProject extends Component {
    
    state = {
        projectName: "",
        description: "",
        // initiator: "",
        githubUrl: "",
        status: "planning",  
        location: "",			
        projectCategory: "NGO",
        requiredDataSkill: "",			
        requiredWebdevSkill: "",		
        requiredUxuiSkill: ""
    }
  
  
    
    handleFormSubmit = event => {
        event.preventDefault();
        
        const { 
            projectName,
            description,
            // initiator,
            githubUrl,
            status,  
            location,			
            projectCategory,
            requiredDataSkill,			
            requiredWebdevSkill,		
            requiredUxuiSkill 
        } = this.state;

        console.log('this.state for creating', this.state)


        
        projectService.createProject({
            projectName,
            description,
            initiator: this.props.user._id,
            githubUrl,
            status,  
            location,			
            projectCategory,
            requiredDataSkill,			
            requiredWebdevSkill,		
            requiredUxuiSkill
        })
        .then(this.props.history.push(`/initiator-dashboard`))
        .catch((error) => console.log('error', error))
    }
    
    handleChange = event => {
        let { name, value, type, options } = event.target;
        console.log('type', type)
        
        this.setState({ [name]: value });
    }
    
    render() {
        
        const { 
            projectName,
            description,
            // initiator,
            githubUrl,
            status,  
            location,			
            projectCategory,
            requiredDataSkill,			
            requiredWebdevSkill,		
            requiredUxuiSkill 
        } = this.state;
        

        return (
            <div className="level">
                
                 
                <h1 className="title level-item">Initiate a Project</h1>
                <div className="field">
                    <form onSubmit={this.handleFormSubmit}>
                        <div>
                            <label className="label">Project Name</label>
                            <div className="control">
                                <input className="input"
                                type="text"
                                name="projectName"
                                value={projectName}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="label">Status</label>
                            <div className="control">
                                <div className="select">
                                    <select Name="status" value={status} onChange={this.handleChange} >
                                        <option value="planning">planning</option>
                                        <option value="execution">execution</option>
                                        <option value="closed">closed</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="label">Project Category</label>
                            <div className="control">
                                <div className="select">
                                    <select name="projectCategory" value={projectCategory} onChange={this.handleChange} >
                                        <option value="NGO">NGO</option>
                                        <option value="Hackathon">Hackathon</option>
                                        <option value="Business">Business</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="label">#Data</label>
                            <div className="control">
                                <input className="input"
                                    type="number"
                                    name="requiredDataSkill"
                                    value={requiredDataSkill}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="label">#Webdev</label>
                            <div className="control">
                                <input className="input"
                                    type="number"
                                    name="requiredWebdevSkill"
                                    value={requiredWebdevSkill}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="label">#Uxui</label>
                            <div className="control">
                                <input className="input"
                                    type="number"
                                    name="requiredUxuiSkill"
                                    value={requiredUxuiSkill}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="label">Location</label>
                            <div className="control">
                                <input className="input"
                                    type="text"
                                    name="location"
                                    value={location}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="label">Description</label>
                            <div className="control">
                                <input className="input"
                                    type="text"
                                    name="description"
                                    value={description}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="label">GithubUrl</label>
                            <div className="control">
                                <input className="input"
                                    type="text"
                                    name="githubUrl"
                                    value={githubUrl}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <input className="button is-link" type="submit" value="Initiate" />
                            </div>

                            <div className="control">
                                <Link className="button is-link is-light" to={"/initiator-dashboard"}>Cancel</Link>
                            </div>
                        </div>
                    
                    </form>
                </div>
            
            
            </div>
        )
    }
}
export default withAuth(InitiatorAddProject);