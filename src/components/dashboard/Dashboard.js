import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import UserTable from './UserTable';

class Dashboard extends Component {
    render() {
        //console.log(this.props)
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="dashboard-grid">
                    <div className="collapse-menu">
                        <ul className="collapsible">
                            <li>
                                <div className="collapsible-header">First</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Second</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Third</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                        </ul>
                    </div>
                    <div className="content-side">
                        <div className="container">
                            <UserTable/>
                        </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        // projects: state.firestore.ordered.projects,
        auth: state.firebase.auth 
    }
}

export default compose(
    connect(mapStateToProps),
    // firestoreConnect([
    //     { collection: 'projects' }
    // ])s
)(Dashboard)