import React from 'react';
import '../styles/components/Experience.css';

const Experience = () => (
  <div className="experience-container">
    <h2 className="experience-title">Experience</h2>
    <div className="job">
      <h3 className="job-title">Senior Software Engineer - Design Platform</h3>
      <p className="company">Prolance Services Pvt Ltd</p>
      <p className="job-period">12/2022 - 04/2024 (Full Time)</p>
      <ul className="job-description">
        <li className="job-item">Worked on a SketchUp plugin for interior designers providing end-to-end interior solutions, including 3D designing, generating quotations, BOQs, 2D factory drawings, and realistic rendering.</li>
        <li className="job-item">Upgraded the version SketchUp plugin for interior designers adding new functionalities</li>
        <li className="job-item">Implemented solutions for faster data transfer using callbacks with the frontend React.js API and backend C# API using the net-http library.</li>
        <li className="job-item">Deployed and released separate plugin extension files for different clients with custom libraries and services.</li>
      </ul>
    </div>
    <div className="job">
      <h3 className="job-title">Software Engineer</h3>
      <p className="company">Indium Software</p>
      <p className="job-period">05/2021 - 08/2022 (Full Time)</p>
      <ul className="job-description">
        <li className="job-item">Developed backend APIs for a web application with Ruby on Rails which was an online platform for teaching, evaluating and tracking progress of children with autism and down syndrome.</li>
        <li className="job-item">Worked on integrating translation service using i18n internationalization in a React.js microservice.</li>
        <li className="job-item">Integrated third-party services including Twilio and Crowdin.</li>
        <li className="job-item">Utilized Docker and Kubernetes for application deployment.</li>
      </ul>
    </div>
    <div className="job">
      <h3 className="job-title">Sr. Ruby Developer</h3>
      <p className="company">Decorpot</p>
      <p className="job-period">08/2020 - 04/2021 (Full Time)</p>
      <ul className="job-description">
        <li className="job-item">Development of a plugin for interior designers providing end-to-end interior solutions, including 3D designing, generating quotations, BOQs, working drawings, and realistic rendering in SketchUp using SketchUp Ruby API.</li>
        <li className="job-item">Automated SketchUp tasks with Ruby scripts to improve speed and user experience.</li>
        <li className="job-item">Performed communication between React and Ruby APIs using callbacks, used Ruby AWS SDK for S3 file uploads.</li>
      </ul>
    </div>
    <div className="job">
      <h3 className="job-title">Software Engineer</h3>
      <p className="company">CognitiveClouds</p>
      <p className="job-period">05/2019 - 04/2020 (Full Time)</p>
      <ul className="job-description">
        <li className="job-item">Worked on an online dumpster management application on RoR creating admin panel for CRUD operation, implemented search functionality using elastic search and deployed using Capistrano.</li>
        <li className="job-item">Worked on the backend for an online salon application creating dashboard for users and implemented payment gateway using stripe.</li>
        <li className="job-item">Created a job portal application with seperate login for recruiters and job seekers, implemented search functionality and job apply functionality</li>
        <li className="job-item">Upgraded an app running on Rails 5 to Rails 6, use of sidekiq and foreman, bug fixes, fixing and running testcases using minitest, migrating from assets pipeline to Zeitwerk, improving overall performance.</li>
        <li className="job-item">Created fetchers and parsers using http in Ruby to automate webscraping on television websites and present television program schedules and data in the desired format (JSON, XML, CSV)</li>
      </ul>
    </div>
    <div className="job">
      <h3 className="job-title">Software Engineer</h3>
      <p className="company">Rently</p>
      <p className="job-period">01/2018 - 04/2019 (Full Time)</p>
      <ul className="job-description">
        <li className="job-item">Worked on the development of a Home automation system application in Ruby on Rails</li>
        <li className="job-item">Learned and used docker and AWS services(SNS, IoT, Lambda, DynamoDB, SQS, Cognito).</li>
        <li className="job-item">Leraned about following agile methodologies(SCRUM), CI/CD, Jira.</li>
      </ul>
    </div>
    <div className="job">
      <h3 className="job-title">Software Engineer</h3>
      <p className="company">Threadsol</p>
      <p className="job-period">07/2017 - 12/2017 (Full Time)</p>
      <ul className="job-description">
        <li className="job-item">Created full-stack web applications using Ruby on Rails, maintenance of a garment manufacturing solution product.</li>
        <li className="job-item">Worked on bug fixes, code testing using rspec, code tracking using git and repositories like BitBucket, atlassian bitbucket, Gitlab.</li>
        <li className="job-item">Learned deployment process using mina, resulting in faster release cycles and increased productivity.</li>
      </ul>
      <p className="job-period">01/2017 - 06/2017 (Internship)</p>
      <ul className="job-description">
        <li className="job-item">Gathered hands on knowledge of Ruby and Ruby on Rails.</li>
        <li className="job-item">Ported a module of an application written in Java to Ruby.</li>
      </ul>
    </div>
  </div>
);

export default Experience;
