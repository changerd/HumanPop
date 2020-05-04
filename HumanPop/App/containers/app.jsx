﻿import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from '../routes/route.jsx';
import Header from './header/header.jsx';

export default class App extends React.Component {
    render() {
        return(
            <Router>
                <div className="container">
                <Header />
                <Routing />
                <footer>
                    <div className="copyright">
                        <p className="text-center">&copy; 2020 - HumanPop</p>
                    </div>
                </footer>
                </div>                
            </Router>
        );
    }
}

