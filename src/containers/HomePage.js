import React from 'react';
import NavBar from '../components/NavBar';
import DashBoard from './DashBoard';

class HomePage extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>This is the HOMEPAGE!</h1>
                <NavBar />
                <DashBoard />
            </div>
        )
    }
    
}

export default HomePage;