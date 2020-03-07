import React , { Component } from "react";
import { withAuth } from "./../lib/Auth";

class SeeUserDetail extends Component {
    render () {
        return (
            <div>
                <h1>See User Detail</h1>
            </div>
        )
    }
}
export default withAuth(SeeUserDetail);