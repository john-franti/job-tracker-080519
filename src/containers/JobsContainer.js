import React from 'react';
import JobCard from '../components/JobCard';

class JobsContainer extends React.Component {

    // need a function to iterate over the user's jobs to render job cards

    render() {
        let jobs;
        if(this.props.user){
            console.log(this.props.user.jobs)
            jobs = Object.keys(this.props.user.jobs)

        }
        console.log(jobs)
        
        // const jobs = Object.keys(this.props.user.jobs)
        return (
            <div>{
                this.props.user? jobs.map(job => <JobCard job={job} user={this.props.user} />):null
                    
            }
               
            </div>
        )
    }
    
}

export default JobsContainer;