import React from 'react';
import ReactDOM from 'react-dom';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { id, value } = event.currentTarget;
        this.setState({ [id]: event.target.value })
    }

    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownLogin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sign In
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownLogin">
                    <div className="px-4 py-3">
                        <div className="form-group">
                            <label>Login</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                placeholder="Enter login"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                placeholder="Enter password" />
                        </div>
                        <input
                            type="button"
                            className="btn btn-dark"
                            value="Sign up"
                            onClick={() => this.props.onLogin(this.state.username, this.state.password)}
                        />
                    </div>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item">New around here? Sign up</a>
                </div>
            </div>

        );
    }
};