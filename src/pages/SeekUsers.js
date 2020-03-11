// import React, { Component } from "react";
// import { withAuth } from "./../lib/Auth"
// import userService from "../lib/user-service";

// class SeekUsers extends Component {
//     state = {
//         firstName:"",
//     lastName:"",
//     email:"",
//     location:"",
//     skills:"",
//     preferedProject:"",
//     allUsers: [],
//         filteredUsers:[],
//         isLoading: true
//     }

//     componentDidMount() {
//         this.getAllUsers()
        
//     }

//     getAllUsers = () => {
//         userService.getAll()
//         .then((allUsers) => {
//             this.setState( {allUsers, filteredUsers: allUsers, isLoading:false } ) 
//             })
//         .catch((error) => console.log(error)) 
//     } 
    
//     handleFormSubmit = event => {
//         event.preventDefault();
//         this.userFilter(this.state.allUsers)
       
//     }
    
//     userFilter = allUsers => {

//         const { 
//             location,
//             skills,
//             preferedProject,
//         } = this.state;
        
//         if(!location && !skills && !preferedProject ) {
//             this.getAllUsers()
//         } else {
            
            
//             const filteredUsers = allUsers.filter((user) => {
                
//                 return (this.state.skills.includes(user.skills)) &&	
//                 this.state.preferedProject.includes(user.preferedProject)   &&
//                 user.location === this.state.location
//             })
    
//             this.setState({filteredUsers})
//         }
        
//     }


//       handleChange = event => {
//         let { name, value, type, options } = event.target;
        
//         if(type==="select-multiple") {
//           value = [];
//           for (var i = 0; i < options.length; i++) {
//             if (options[i].selected) {
//               value.push(options[i].value);
              
//             }
//           }
//           // console.log('value multi select', value);
//         }
        
//         this.setState({ [name]: value });
//         // console.log('this.state after mutate', this.state)
//       }
      
    
    
//     render () {
//         return (
//             <div>
//                 <h1>Seek Users</h1>
//                 <form onSubmit={this.handleSubmit}>






//                 </form>
//             </div>
//         )
//     }
// }
// export default withAuth(SeekUsers);