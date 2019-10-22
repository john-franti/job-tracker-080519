import React from 'react';
import JobCard from '../components/JobCard';

class JobsContainer extends React.Component {

    // need a function to iterate over the user's jobs to render job cards

    render() {
        return (
            <div>
                <JobCard />
            </div>
        )
    }
    
}

export default JobsContainer;