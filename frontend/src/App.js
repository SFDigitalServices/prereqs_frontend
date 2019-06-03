import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
// const { BrowserRouter, NavLink, Route } = ReactRouterDOM;
import {User} from './user';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Dashboard />
            </BrowserRouter>
        );
    }
}

class Dashboard extends React.Component {
    render() {
        return (
            <div id="dashboard">
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <NavLink exact to="/" className="nav-link">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact to="/users" className="nav-link">
                      Users
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact to="/cool"className="nav-link">
                      Cool Stuff
                    </NavLink>
                  </li>
                </ul>
                <div className="content">
                  <Route exact path="/" component={Home} />
                  <Route exact path="/users" component={User} />
                  <Route exact path="/cool" component={Cool} />
                </div>
            </div>
        );
    }
}

class Home extends React.Component {
    render() {
        return <h1>Hello there ! You're on the home page</h1>;
    }
}

class Cool extends React.Component {
    render() {
        return <h1>This is the Cool Panel</h1>;
    }
}

export default App;
