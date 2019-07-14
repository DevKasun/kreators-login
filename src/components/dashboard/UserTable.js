import React, { Component } from 'react';
import axios from 'axios';

class UserTable extends Component {

    state ={
        users: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            this.setState({
                users: res.data.slice(0,5)
            })
        })
    }

    render() {
        const { users } = this.state;
        const usersList = users.length ? (
            users.map(user => {
                return (
                    <tr key={user.id}>
                        <td>{ user.name }</td>
                        <td>{ user.username }</td>
                        <td>{ user.email }</td>
                    </tr>
                )
            })
        ) : (
            <div className="center">No users</div>
        )
        return (
            <React.Fragment>
                <table className="highlight">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {usersList}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default UserTable
