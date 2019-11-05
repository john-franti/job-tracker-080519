import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <h1>This is the HOMEPAGE!</h1>
                <Link to={ {pathname: "/dashboard", state: {user: this.props.user}}}>Dashboard</Link>
            </div>
        )
    }
}

export default HomePage;