var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_React$Component) {
    _inherits(Users, _React$Component);

    function Users() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Users);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Users.__proto__ || Object.getPrototypeOf(Users)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            users: [],
            errorMsg: ""
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Users, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            axios.get('/api/users').then(function (response) {
                var users = response.data.data;
                _this2.setState({ users: users });
            });
        }
    }, {
        key: 'addNewUser',
        value: function addNewUser(e) {
            var _this3 = this;

            var newUser = {
                email: this.state.email,
                secret: this.state.password,
                is_admin: this.state.isAdmin
            };

            // debugger;
            // const [cookies, setCookie] = ReactCookie.useCookies(['csrf']);
            // let csrfCookieVal = ReactCookie.Cookies.get('csrf');

            axios.post('/api/users', newUser, {
                xsrfCookieName: 'csrftoken',
                xsrfHeaderName: 'X-CSRFToken'
            }).then(function (response) {
                console.log(response);
                if (response.data.status == 'error') {
                    _this3.setState({
                        errorMsg: response.data.message
                    });
                } else {
                    _this3.setState({
                        errorMsg: ''
                    });
                }
            });
        }
    }, {
        key: 'deleteUser',
        value: function deleteUser(e) {
            console.log(e.target);
            axios.delete('/api/users/' + e.target.value, {
                xsrfCookieName: 'csrftoken',
                xsrfHeaderName: 'X-CSRFToken'
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState(_defineProperty({}, e.target.name, e.target.value));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Users'
                ),
                React.createElement(
                    'div',
                    { className: "alert alert-danger " + (this.state.errorMsg == '' ? 'd-none' : 'd-block') },
                    this.state.errorMsg
                ),
                React.createElement(
                    'table',
                    { className: 'table table-bordered table-striped' },
                    React.createElement(
                        'thead',
                        { className: 'thead-dark' },
                        React.createElement(
                            'tr',
                            { key: 'header_row' },
                            React.createElement(
                                'th',
                                { scope: 'col' },
                                'email'
                            ),
                            React.createElement(
                                'th',
                                { scope: 'col' },
                                'admin'
                            ),
                            React.createElement('th', { scope: 'col' })
                        ),
                        this.state.users.map(function (user, idx) {
                            return React.createElement(
                                'tr',
                                { key: user.email },
                                React.createElement(
                                    'td',
                                    null,
                                    user.email
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    user.is_admin == 1 ? 'yes' : 'no'
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    React.createElement(
                                        'button',
                                        { type: 'button', onClick: _this4.deleteUser.bind(_this4), value: user.id },
                                        'Delete'
                                    )
                                )
                            );
                        })
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', name: 'email', placeholder: 'email', onChange: this.handleChange.bind(this) }),
                    React.createElement('input', { type: 'password', name: 'password', placeholder: 'password', onChange: this.handleChange.bind(this) }),
                    React.createElement('input', { type: 'checkbox', name: 'isAdmin', value: '1', onChange: this.handleChange.bind(this) }),
                    'admin',
                    React.createElement(
                        'button',
                        { type: 'button', onClick: this.addNewUser.bind(this) },
                        'Add User'
                    )
                )
            );
        }
    }]);

    return Users;
}(React.Component);

export { Users };