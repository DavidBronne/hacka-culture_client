import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";
import projectService from "./../lib/project-service";
import ParticipantSeekProjectCard from "../components/ParticipantSeekProjectCard"

class ParticipantSeekProject extends Component {
    
    state = {
        // projectName: "",
        // description: "",
        // initiator: "",
        // githubUrl: "",
        status: "",  
        // location: "",			
        projectCategory: "",
        requiredDataSkill: "",			
        requiredWebdevSkill: "",		
        requiredUxuiSkill: "",
        projects:[],
        isLoading:true,
        projectsFiltered: []
    }
    
    componentDidMount () {
        this.getAllProject()

    }
    
    getAllProject = () => {
        projectService.getAll()
            .then( (allProjects) => {
                console.log('allProjects in componentDidMount', allProjects)
                this.setState({projects: allProjects, projectsFiltered: allProjects,isLoading:false})
            })
            .catch((error) => console.log('error', error))
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.projectFilter(this.state.projects)
       
    }
    
    handleChange = event => {
        let { name, value, type, options } = event.target;
        console.log('type', type)
        if(type==="select-multiple") {
          value = [];
          for (var i = 0; i < options.length; i++) {
            if (options[i].selected) {
              value.push(options[i].value);
                console.log('value', value)
            }
          }
          // console.log('value multi select', value);
        }
        
        this.setState({ [name]: value });
        console.log('this.state after change', this.state)
    }

    projectFilter = allProjects => {
        

        const { 
            status, 			
            projectCategory,
            requiredDataSkill,			
            requiredWebdevSkill,		
            requiredUxuiSkill 
        } = this.state;
        
        if(!status && !projectCategory && !requiredDataSkill && ! requiredWebdevSkill  && !requiredUxuiSkill) {
            this.getAllProject()
        } else {
            console.log('this.state in filter', this.state)
            
            const projectsFiltered = allProjects.filter((project) => {
                console.log('project.status', project.status)
                return (this.state.status.includes(project.status) || !this.state.status)  &&	
                this.state.projectCategory.includes(project.projectCategory)   &&
                project.requiredDataSkill >= this.state.requiredDataSkill &&			
                project.requiredWebdevSkill >= this.state.requiredWebdevSkill &&		
                project.requiredUxuiSkill >= this.state.requiredUxuiSkill
            })
    
            this.setState({projectsFiltered})
        }
        
    }
    
    render() {
        
        const { 
            // projectName,
            // description,
            // initiator,
            // githubUrl,
            status,  
            // location,			
            projectCategory,
            requiredDataSkill,			
            requiredWebdevSkill,		
            requiredUxuiSkill 
        } = this.state;
        

        return (
            <div>
                <h1>Participant Seek Project</h1>
                <Link to="/participant-dashboard">
                    <h4>Dashboard</h4>
                    </Link>
                
                {/* <form onSubmit={this.handleFormSubmit}> */}
                    {/* <div>
                        <label>Project Name</label>
                        <input
                        type="text"
                        name="projectName"
                        value={projectName}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>GithubUrl</label>
                        <input
                        type="text"
                        name="githubUrl"
                        value={githubUrl}
                        onChange={this.handleChange}
                        />
                    </div> */}
                    <form onSubmit={this.handleFormSubmit}>
                    <div>
                        <label>Status</label>
                        <select name="status" value={status} onChange={this.handleChange} multiple>
                            <option value="planning">planning</option>
                            <option value="execution">execution</option>
                            <option value="closed">closed</option>
                        </select>
                    </div>
                    {/* <div>
                        <label>Location</label>
                        <input
                        type="text"
                        name="location"
                        value={location}
                        onChange={this.handleChange}
                        />
                    </div> */}
                    <div>
                        <label>Project Category</label>
                        <select name="projectCategory" value={projectCategory} onChange={this.handleChange} multiple>
                            <option value="NGO">NGO</option>
                            <option value="Hackathon">Hackathon</option>
                            <option value="Business">Business</option>
                        </select>
                    </div>
                    <div>
                    <label>Required Data Skill</label>
                        <input
                        type="number"
                        name="requiredDataSkill"
                        value={requiredDataSkill}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                    <label>Required Webdev Skill</label>
                        <input
                        type="number"
                        name="requiredWebdevSkill"
                        value={requiredWebdevSkill}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Required Uxui Skill</label>
                        <input
                        type="number"
                        name="requiredUxuiSkill"
                        value={requiredUxuiSkill}
                        onChange={this.handleChange}
                        />
                    </div>
                    
                    <input type="submit" value="Filter" />
                </form>
            
                <h3>Result</h3>
                {console.log('this.state.projects in render',this.state.projects)}
                { 
                    
                    this.state.isLoading 
                    ? null 
                        
                    :   this.state.projectsFiltered
                            .map( (project) => {
                            
                            return <ParticipantSeekProjectCard key={ project._id } {...project}/>
                    
                       
                    })
                    
                    
                    
                }

            </div>
        )
    }    
}
export default withAuth(ParticipantSeekProject);

