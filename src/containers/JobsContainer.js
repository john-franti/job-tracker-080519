import React from 'react';
import JobCard from '../components/JobCard';
import Form from  '../components/Form';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class JobsContainer extends React.Component {

    state = {
        form: false
    }

    handleClick = () => {
        console.log(this.state.form)
        console.log("i'm inside onclick")
        // this.setState({
        //     form: !this.state.form
        // })
    }
        
    // goals for this component:

    // - need to have a button that when clicked will render selected job's details
    // - 

    render() {
        let jobs;
        if (this.props.user) {
            console.log(this.props.user.jobs)
            jobs = Object.keys(this.props.user.jobs)
        }
        console.log(jobs)
        return (
            <div>
                { this.state.form ? <Form /> : null }
                <button onClick={this.handleClick}>Create New Job</button>
                { this.props.user ? 
                jobs.map(job => <JobCard job={job} user={this.props.user} />) 
                : null }
            </div>
        )
    } 
}

export default JobsContainer;