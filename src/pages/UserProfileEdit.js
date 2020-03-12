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
      <div className="level">
        
        <h1 className="title level-item">Edit User Profile</h1>
        <div className="field">
         
          <form onSubmit={this.handleFormSubmit}>
           
            <div>
              <label className="label">Last Name</label>
              <div className="control">
              <input className="input"
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
            </div>
            </div>
            <div>
              <label className="label">First Name</label>
              <div className="control">
              <input className="input"
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
            </div>
            </div>
            <div>
              <label className="label">Email</label>
              <div className="control">
              <input className="input"
                type="text"
                name="email"
                value={email}
                // onChange={this.handleChange}
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
              <label className="label">Skills</label>
              <div className="control">
              <div className="select">
                <select name="skills" value={skills} onChange={this.handleChange} multiple>
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
                <select name="preferedProject" value={preferedProject} onChange={this.handleChange} multiple>
                  <option value="NGO">NGO</option>
                  <option value="Hackathon">Hackathon</option>
                  <option value="Business">Business</option>
                </select>
                </div>
              </div>

            
            </div>
            
            <div className="control">
              <input className="button is-link" type="submit" value="Mutate" />
            </div>
          
          </form>
        </div>
        
      </div>
    );
  }
}

export default withAuth(UserProfileEdit);
