import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

import authService from "./../lib/auth-service";
import userService from "./../lib/user-service";
import { getNodeText } from "@testing-library/react";

class UserProfileEdit extends Component {
  
  state = {
    firstName:"",
    lastName:"",
    email:"",
    location:"",
    skills:"",
    preferedProject:""
  };

  componentDidMount () {
  //   const { user } = this.props;
  //   console.log("UUUUUUSSSSEEEEERRRR",user)
  
  authService.me()
    .then( user => {
      this.setState({ 
        firstName : user.firstName,
        lastName  : user.lastName,
        email  : user.email,
        location  : user.location,
        skills  : user.skills,
        preferedProject  : user.preferedProject 
      })
      console.log('this.state in componentDidMount', this.state)
    })
  }
  
  handleFormSubmit = event => {
    event.preventDefault();
    const { 
      firstName,
      lastName,
      email,
      location,
      skills,
      preferedProject 
    } = this.state;

    userService.updateUser({
      firstName,
      lastName,
      email,
      location,
      skills,
      preferedProject}
    )
    .then((updatedUser) => {
      console.log('updateUser', updatedUser)
    })
    .catch((error) => console.log(error))
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
  
  render() {  
    // const { user } = this.props;
    // console.log("UUUUUUSSSSEEEEERRRR",user)

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
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              // onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Skills</label>
            <select name="skills" value={skills} onChange={this.handleChange} multiple>
              <option value="data">data</option>
              <option value="WebDev">WebDev</option>
              <option value="UXUI">UXUI</option>
            </select>
          </div>
          <div>
            <label>Prefered Project Category</label>
            <select name="preferedProject" value={preferedProject} onChange={this.handleChange} multiple>
              <option value="NGO">NGO</option>
              <option value="Hackathon">Hackathon</option>
              <option value="Business">Business</option>
            </select>


          
          </div>
          <div>
            <input type="submit" value="Mutate" />
          </div>
        </form>
        
      </div>
    );
  }
}

export default withAuth(UserProfileEdit);
