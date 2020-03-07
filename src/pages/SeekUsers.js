import React, { Component } from "react";
import { withAuth } from "./../lib/Auth"

class SeekUsers extends Component {
    render () {
        return (
            <div>
                <h1>Seek Users</h1>
            </div>
        )
    }
}
export default withAuth(SeekUsers);