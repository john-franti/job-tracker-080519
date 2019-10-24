import React from 'react';
import ProgressBar from '../components/ProgressBar';
import SearchBar from '../components/SearchBar';
import JobsContainer from './JobsContainer';

class HomePage extends React.Component {

    render() {
                    return (
            <div>
                <h1>This is the DASHBOARD!</h1>
                <ProgressBar />
                <SearchBar />
                <JobsContainer user={this.props.user}/>
            </div>
        )
    }
    
}

export default HomePage;