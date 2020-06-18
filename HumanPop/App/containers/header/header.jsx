import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/loginForm.jsx'
import {
    login,
    logout,
    showLoginForm
} from './headerActions.jsx';

class Header extends React.Component {
    render() {
        let loginButton = this.props.header.isLogged ?
            <span className="nameLabel">Hello, {this.props.header.name}</span> :
            <LoginForm onLogin={this.props.login} />

        let logoutButton = this.props.header.isLogged ?
            <button className="btn btn-dark" onClick={() => { if (confirm('Do you want logout?')) this.props.logout() }} >Logout</button> :
            '';

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">HumanPop</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/humans">Humans</Link>
                        </li>
                    </ul>
                    <div className="navbar-text">
                        {loginButton} {logoutButton}
                    </div>
                </div>
            </nav>
        );
    }
};

let mapProps = (state) => {
    return {
        header: state.header
    }
}

let mapDispatch = (dispatch) => {
    return {
        login: bindActionCreators(login, dispatch),
        logout: bindActionCreators(logout, dispatch),
        showLoginForm: bindActionCreators(showLoginForm, dispatch),
    }
}

export default connect(mapProps, mapDispatch)(Header) 