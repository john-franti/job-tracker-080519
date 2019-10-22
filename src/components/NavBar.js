import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const NavBar = (props) => {
    console.log(props);
    return (
        <div>
                 <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/homepage">homepage</Link>
        </li>
        <li>
          <Link to="/dashboard">DashBoard</Link>
        </li>
      </ul>
        </div>
    )
}

export default NavBar;