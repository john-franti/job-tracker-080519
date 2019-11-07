import React from 'react';
import ProgressBar from '../components/ProgressBar';
import SearchBar from '../components/SearchBar';
import JobsContainer from './JobsContainer';

class DashBoard extends React.Component {

    render() {
        console.log(this.props.user)
        return (
            <div>
                <ProgressBar />
                <SearchBar />
                <JobsContainer user={this.props.user} />
            </div>
        )
    }
    
}

export default DashBoard;