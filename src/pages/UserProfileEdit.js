import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

import UserService from "./../lib/user-service"

class UserProfileEdit extends Component {
  
  state = {
    _id:"",
    firstName:"",
    lastName:"",
    email:"",
    location:"",
    skills:[],
    preferedProject:[]
  };

  // componentDidMount () {
  //   const { user } = this.props;
  //   console.log("UUUUUUSSSSEEEEERRRR",user)
    
  //   this.setState({
  //     _id:"user._id",
  //     firstName : "user.firstName",
  //     lastName  : "user.lastName",
  //     email  : "user.email",
  //     location  : "user.location",
  //     skills  : "user.skills",
  //     preferedProject  : "user.preferedProject" 
  //   })
  // }
  
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   const { 
  //     _id,
  //     firstName,
  //     lastName,
  //     email,
  //     location,
  //     skills,
  //     preferedProject 
  //   } = this.state;

  //   this.props.updateUser(
  //     _id,
  //     firstName,
  //     lastName,
  //     email,
  //     location,
  //     skills,
  //     preferedProject
  // )
//    }

  
  handelChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }
  
  render() {
    
    const { user } = this.props;
    console.log("UUUUUUSSSSEEEEERRRR",user)

    const {       
      firstName,
      lastName,
      email,
      location,
      skills,
      preferedProject 
    } = this.state;

    return (
      <div>
        <h1>Edit User Profile</h1>

        <form onSubmit={this.handleFormSubmit}>

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />

        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />

        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          // onChange={this.handleChange}
        />

        <label>Location</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={this.handleChange}
        />

        {/* <label>Skills</label>
        <input
          type="text"
          name="skills"
          value={skills}
          onChange={this.handleChange}
        />

        <label>Prefered Project Category</label>
        <input
          type="text"
          name="preferedProject"
          value={preferedProject}
          onChange={this.handleChange}
        /> */}
        


        </form>
        
      </div>
    );
  }
}

export default withAuth(UserProfileEdit);
