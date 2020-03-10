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
                        "/project/create",
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

        getOne(id) {
            return this.project
            .get(`/project/${id}`)
            .then(({ data}) => data)
        }

        updateProject(id, projectToUpdate){
                return this.project
                .put(`/project/edit/${id}`, projectToUpdate)
                .then(({ data }) => data)

        }

        getAll() {
            return this.project
            .get('/project/all')
            .then(({ data }) => data)
        }
        
}

const projectService = new Project();

export default projectService;