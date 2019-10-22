import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './containers/HomePage';
import DashBoard from './containers/DashBoard';
import NavBar from "./components/NavBar"


const routing = (
    <Router >
        <div>

            <Route path="/" component={NavBar} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/dashboard" component={DashBoard} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
