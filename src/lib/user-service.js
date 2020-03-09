import axios from "axios";

class User {
    constructor() {
        this.user = axios.create({
            // baseURL: "http://localhost:5000",
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true  
        });
    }

    updateUser({ firstName, lastName, email, location, skills, preferedProject}) {
        return this.user
        .put("/user/edit", { firstName, lastName, email, location, skills, preferedProject })
        .then(({data}) => data)}

    getOne(id) {
        return this.user
        .get(`/user/${id}`)
        .then(({data}) => data)
    }
}

const userService = new User();

export default userService;
 