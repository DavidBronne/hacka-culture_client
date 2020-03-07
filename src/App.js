import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
//import Private from "./pages/Private";
import UserPortal from "./pages/UserPortal";
import UserProfileEdit from "./pages/UserProfileEdit";
import InitiatorDashboard from "./pages/InitiatorDashboard";
import InitiatorAddProject from "./pages/InitiatorAddProject";
import InitiatorEditProject from "./pages/InitiatorEditProject";
import ParticipantDashboard from "./pages/ParticipantDashboard";
import ParticipantSeekProject from "./pages/ParticipantSeekProject";
import ParticipantEditProject from "./pages/ParticipantEditProject";
import SeekUsers from "./pages/SeekUsers";
import SeeUserDetail from "./pages/SeeUserDetail";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <AnonRoute exact path="/" component={Home} />
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/user-portal" component={UserPortal} />
          <PrivateRoute exact path="/user-profile-edit" component={UserProfileEdit} />
          <Route exact path="/initiator-dashboard" component={InitiatorDashboard} />
          <Route exact path="/initiator-add-project" component={InitiatorAddProject} />
          <Route exact path="/initiator-edit-project/:id" component={InitiatorEditProject} />
          <Route exact path="/participant-dashboard" component={ParticipantDashboard} />
          <Route exact path="/participant-seek-project" component={ParticipantSeekProject} />
          <Route exact path="/participant-edit-project/:id" component={ParticipantEditProject} />
          <Route exact path="/seek-users" component={SeekUsers} />
          <Route exact path="/see-user-detail/:id" component={SeeUserDetail} />


          // other Private routes
        </Switch>
      </div>
    );
  }
}

export default App;
