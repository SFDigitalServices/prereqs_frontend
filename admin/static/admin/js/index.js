var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {BrowserRouter,NavLink} from 'react-router-dom';
var _ReactRouterDOM = ReactRouterDOM,
    BrowserRouter = _ReactRouterDOM.BrowserRouter,
    NavLink = _ReactRouterDOM.NavLink,
    Route = _ReactRouterDOM.Route;

import { Users } from './users.js';

// YOU DON'T CARE ABOUT THIS

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                BrowserRouter,
                null,
                React.createElement(Dashboard, null)
            );
        }
    }]);

    return App;
}(React.Component);

// This is what you really care about


var Dashboard = function (_React$Component2) {
    _inherits(Dashboard, _React$Component2);

    function Dashboard() {
        _classCallCheck(this, Dashboard);

        return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
    }

    _createClass(Dashboard, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "dashboard" },
                React.createElement(
                    "ul",
                    { className: "nav nav-pills" },
                    React.createElement(
                        "li",
                        { className: "nav-item" },
                        React.createElement(
                            NavLink,
                            { exact: true, to: "/", className: "nav-link" },
                            "Home"
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "nav-item" },
                        React.createElement(
                            NavLink,
                            { exact: true, to: "/users", className: "nav-link" },
                            "Users"
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "nav-item" },
                        React.createElement(
                            NavLink,
                            { exact: true, to: "/cool", className: "nav-link" },
                            "Cool Stuff"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "content" },
                    React.createElement(Route, { exact: true, path: "/", component: Home }),
                    React.createElement(Route, { exact: true, path: "/users", component: Users }),
                    React.createElement(Route, { exact: true, path: "/cool", component: Cool })
                )
            );
        }
    }]);

    return Dashboard;
}(React.Component);

// This is what you really care about


var Home = function (_React$Component3) {
    _inherits(Home, _React$Component3);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h1",
                null,
                "Hello there ! You're on the home page"
            );
        }
    }]);

    return Home;
}(React.Component);

// This is what you could care about


var Cool = function (_React$Component4) {
    _inherits(Cool, _React$Component4);

    function Cool() {
        _classCallCheck(this, Cool);

        return _possibleConstructorReturn(this, (Cool.__proto__ || Object.getPrototypeOf(Cool)).apply(this, arguments));
    }

    _createClass(Cool, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h1",
                null,
                "This is the Cool Panel"
            );
        }
    }]);

    return Cool;
}(React.Component);

// YOU DON'T CARE ABOUT THIS


ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));