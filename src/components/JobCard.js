import React from 'react';

const JobCard = (props) => {
   console.log(props)

    console.log(props.user.jobs);
    let jobKey = props.job
    console.log(jobKey);
let job = props.user.jobs[jobKey]
    console.log(job)



    

    return (
        <div>
            <h1>Job Card!</h1>
            <ul>
                <li>
                    <div>{job.title}</div>
                </li>
                <li>
                    <div>{job.url}</div>
                </li>
                <li>
                    <label>Resume Sent</label>
                    <input type="checkbox" value={job.resume_updated} ></input>
                </li>
                <li>
                    <label>Cover Letter Sent</label>
                    <input type="checkbox" value={job.cover_letter_updated} ></input>
                </li>
                <li>
                    <label>Application Complete</label>
                    <input type="checkbox" value={job.applied_on_company_website} ></input>
                </li>
                <li>
                    <label>Linkin Connection</label>
                    <input type="checkbox" value={job.linkin_connection} ></input>
                </li>
                <li>
                    <label>Behavior Interview</label>
                    <input type="checkbox" value={job.cultural_intervew} ></input>
                </li> 
                <li>
                    <label>Technical Interview</label>
                    <input type="checkbox" value={job.technical_intervew} ></input>
                </li> 
                <li>
                    <label>Job Offer</label>
                    <input type="checkbox" value={job.job_offer} ></input>
                </li> 
                <div>{job.close_date}</div>
            </ul>
        </div>
    )
}

export default JobCard;