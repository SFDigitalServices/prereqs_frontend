import React from 'react';
import ReactDataGrid from 'react-data-grid';
const axios = require('axios');
const columns = [
    { key: 'email', name: 'Email', editable: true},
    { key: 'is_admin', name: 'Admin'}
];

class User extends React.Component {

    state = {
        users: [],
        errorMsg: ""
    }

    componentDidMount(){
        axios.get('/api/users')
            .then(response => {
                const users = response.data.data;
                this.setState({users});
            });
    }

    addNewUser(e){
        let newUser = {
            email: this.state.email,
            secret: this.state.password,
            is_admin: this.state.isAdmin
        };
        
        // debugger;
        // const [cookies, setCookie] = ReactCookie.useCookies(['csrf']);
        // let csrfCookieVal = ReactCookie.Cookies.get('csrf');

        axios.post('/api/users',
            newUser, {
                xsrfCookieName: 'csrftoken',
                xsrfHeaderName: 'X-CSRFToken'
            }
        ).then(response => {
            console.log(response);
            if (response.data.status === 'error') {
                this.setState({
                    errorMsg: response.data.message
                })
            } else {
                this.setState({
                    errorMsg: ''
                })
            }
        })
    }

    deleteUser(e){
        console.log(e.target);
        axios.delete('/api/users/' + e.target.value, {
            xsrfCookieName: 'csrftoken',
            xsrfHeaderName: 'X-CSRFToken'
        });
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onGridRowsUpdated(e){
        debugger;
        console.log(e);
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                <div className={"alert alert-danger " + (this.state.errorMsg === '' ? 'd-none': 'd-block')}>{this.state.errorMsg}</div>

                <ReactDataGrid
                    columns={columns}
                    rowGetter={i => this.state.users[i]}
                    rowsCount={this.state.users.length}
                    onGridRowsUpdated={this.onGridRowsUpdated}
                    enableCellSelect={true} />
                
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr key="header_row">
                            <th scope="col">email</th>
                            <th scope="col">admin</th>
                            <th scope="col"></th>
                        </tr>
                        {this.state.users.map((user, idx)=>(
                            <tr key={user.email}>
                                <td>{user.email}</td>
                                <td>{user.is_admin === 1 ? 'yes' : 'no'}</td>
                                <td><button type="button" onClick={this.deleteUser.bind(this)} value={user.id}>Delete</button></td>
                            </tr>
                        ))}
                    </thead>
                </table>
                <div>
                    <input type="text" name="email" placeholder="email" onChange={this.handleChange.bind(this)}></input>
                    <input type="password" name="password" placeholder="password" onChange={this.handleChange.bind(this)}></input>
                    <input type="checkbox" name="isAdmin" value="1" onChange={this.handleChange.bind(this)}></input>admin
                    <button type="button" onClick={this.addNewUser.bind(this)}>Add User</button>
                </div>
            </div>
        )
    }
}

export {User}