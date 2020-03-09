import axios from "axios";

class Project {
    constructor() {
        this.project = axios.create({
            // baseURL: "http://localhost:5000",
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true  
        });
    }

    createProject( { 
            projectName,
            description,
            // initiator,
            githubUrl,
            status,  
            location,			
            projectCategory,
            requiredDataSkill,			
            requiredWebdevSkill,		
            requiredUxuiSkill } ) {
        return this.project
        .post(
            "/create",
            { 
                projectName,
                description,
                // initiator,
                githubUrl,
                status,  
                location,			
                projectCategory,
                requiredDataSkill,			
                requiredWebdevSkill,		
                requiredUxuiSkill })
        .then(({createdProject}) => createdProject)
        }
}

const projectService = new Project();

export default projectService;