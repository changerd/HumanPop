﻿import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from '../../components/loginForm.jsx'
import {
    login,
    logout,
    showLoginForm,
    register,
} from './headerActions.jsx';
import AuthHelper from '../../Utils/authHelper.js';

class Header extends React.Component {
    
    /*componentWillReceiveProps(nextProps) {
        if(this.props.header.isLogged == true){
            <Redirect to='/' />
        }
    } */  

    render() {
        let loginButton = this.props.header.isLogged ?
            <span className="nameLabel">Hello, {AuthHelper.getLogin()}</span> :
            <LoginForm onLogin={this.props.login} onRegister={this.props.register} />

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
        register: bindActionCreators(register, dispatch)
    }
}

export default connect(mapProps, mapDispatch)(Header) 