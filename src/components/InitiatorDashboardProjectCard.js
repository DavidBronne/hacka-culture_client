import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import userService from "./../lib/user-service"
import { render } from "@testing-library/react";

class InitiatorDashboardCard extends Component{
    

} 

export default withAuth(InitiatorDashboardCard)