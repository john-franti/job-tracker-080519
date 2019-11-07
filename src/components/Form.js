import React from 'react';
import { thisExpression } from '@babel/types';

class Form extends React.Component {

    state = {
        title: "",
        url: "",
        resume_updated: false,
        cover_letter_updated: false,
        applied_on_company_website: false,
        linkin_connection: false,
        cultural_intervew: false,
        technical_intervew: false,
        job_offer: false,
        close_date: ""
    }
   
   render() {
       if (this.props) {
           this.setState({
            title: this.props.title,
            url: this.props.url,
            resume_updated: this.props.resume_updated,
            cover_letter_updated: this.props.resume_updated,
            applied_on_company_website: this.props.applied_on_company_website,
            linkin_connection: this.props.linkin_connection,
            cultural_intervew: this.props.cultural_intervew,
            technical_intervew: this.props.technical_intervew,
            job_offer: this.props.job_offer,
            close_date: this.props.close_date
           })
       }
    console.log(this.props)
    return (
        <div>
            <form>
                <li>
                    <label>Title</label>
                    <input type="text" value={this.state.title} ></input>
                </li>
                <li>
                    <label>Job URL</label>
                    <input type="text" value={this.state.url} ></input>
                </li>
                <li>
                    <label>Resume Sent</label>
                    <input type="checkbox" value={this.state.resume_updated} ></input>
                </li>
                <li>
                    <label>Cover Letter Sent</label>
                    <input type="checkbox" value={this.state.cover_letter_updated} ></input>
                </li>
                <li>
                    <label>Application Complete</label>
                    <input type="checkbox" value={this.state.applied_on_company_website} ></input>
                </li>
                <li>
                    <label>Linkin Connection</label>
                    <input type="checkbox" value={this.state.linkin_connection} ></input>
                </li>
                <li>
                    <label>Behavior Interview</label>
                    <input type="checkbox" value={this.state.cultural_intervew} ></input>
                </li> 
                <li>
                    <label>Technical Interview</label>
                    <input type="checkbox" value={this.state.technical_intervew} ></input>
                </li> 
                <li>
                    <label>Job Offer</label>
                    <input type="checkbox" value={this.state.job_offer} ></input>
                </li> 
                <div>{this.state.close_date}</div>
            </form>
        </div>
    )
   }
}

export default Form;