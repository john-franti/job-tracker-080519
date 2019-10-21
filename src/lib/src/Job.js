export default class Job {
  constructor(url, title, external_job_id = "") {
    this.url = url;
    this.title = title;
    this.external_job_id = external_job_id;
  }
  resume_updated = false;
  cover_letter_updated = false;
  applied_on_company_website = false;
  linkedin_connection = false;
  cultural_interview = false;
  technical_interview = false;
  job_offer = false;
  close_date = "";
  notes = {};
}
