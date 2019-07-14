import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
// import "materialize-css/dist/css/materialize.min.css";

class DashNavBar extends Component {

    componentDidMount() {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {

        });
    }

    render() {
        return (
            <React.Fragment>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header">First</div>
                        <div className="collapsible-body"><span>Coming soon</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header">Second</div>
                        <div className="collapsible-body"><span>Coming soon</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header">Third</div>
                        <div className="collapsible-body"><span>Coming soon</span></div>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}

export default DashNavBar;
