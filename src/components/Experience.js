import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  border-bottom: 2px solid #000;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Job = styled.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const JobTitle = styled.h3`
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const JobDescription = styled.ul`
  margin: 10px 0 0 20px;

  @media (max-width: 768px) {
    margin: 10px 0 0 15px;
  }
`;

const Company = styled.p`
  margin: 5px 0;
  font-weight: bold;
`;

const JobPeriod = styled.p`
  margin: 5px 0;
  color: #666;
`;

const JobItem = styled.li`
  margin-bottom: 5px;
`;

const Experience = () => (
  <ExperienceContainer>
    <Title>Experience</Title>
    <Job>
      <JobTitle>Senior Software Engineer - Design Platform</JobTitle>
      <Company>Prolance Services Pvt Ltd</Company>
      <JobPeriod>12/2022 - 04/2024 (Full Time)</JobPeriod>
      <JobDescription>
        <JobItem>Worked on a SketchUp plugin for interior designers providing end-to-end interior solutions, including 3D designing, generating quotations, BOQs, 2D factory drawings, and realistic rendering.</JobItem>
        <JobItem>Upgraded the version SketchUp plugin for interior designers adding new functionalities</JobItem>
        <JobItem>Implemented solutions for faster data transfer using callbacks with the frontend React.js API and backend C# API using the net-http library.</JobItem>
        <JobItem>Deployed and released separate plugin extension files for different clients with custom libraries and services.</JobItem>
      </JobDescription>
    </Job>
    <Job>
      <JobTitle>Software Engineer</JobTitle>
      <Company>Indium Software</Company>
      <JobPeriod>05/2021 - 08/2022 (Full Time)</JobPeriod>
      <JobDescription>
        <JobItem>Developed backend APIs for a web application with Ruby on Rails which was an online platform for teaching, evaluating and tracking progress of children with autism and down syndrome.</JobItem>
        <JobItem>Worked on integrating translation service using i18n internationalization in a React.js microservice.</JobItem>
        <JobItem>Integrated third-party services including Twilio and Crowdin.</JobItem>
        <JobItem>Utilized Docker and Kubernetes for application deployment.</JobItem>
      </JobDescription>
    </Job>
    <Job>
      <JobTitle>Sr. Ruby Developer</JobTitle>
      <Company>Decorpot</Company>
      <JobPeriod>08/2020 - 04/2021 (Full Time)</JobPeriod>
      <JobDescription>
        <JobItem>Development of a plugin for interior designers providing end-to-end interior solutions, including 3D designing, generating quotations, BOQs, working drawings, and realistic rendering in SketchUp using SketchUp Ruby API.</JobItem>
        <JobItem>Automated SketchUp tasks with Ruby scripts to improve speed and user experience.</JobItem>
        <JobItem>Performed communication between React and Ruby APIs using callbacks, used Ruby AWS SDK for S3 file uploads.</JobItem>
      </JobDescription>
    </Job>
    <Job>
      <JobTitle>Software Engineer</JobTitle>
      <Company>CognitiveClouds</Company>
      <JobPeriod>05/2019 - 04/2020 (Full Time)</JobPeriod>
      <JobDescription>
        <JobItem>Worked on an online dumpster management application on RoR creating admin panel for CRUD operation, implemented search functionality using elastic search and deployed using Capistrano.</JobItem>
        <JobItem>Worked on the backend for an online salon application creating dashboard for users and implemented payment gateway using stripe.</JobItem>
        <JobItem>Created a job portal application with seperate login for recruiters and job seekers, implemented search functionality and job apply functionality</JobItem>
        <JobItem>Upgraded an app running on Rails 5 to Rails 6, use of sidekiq and foreman, bug fixes, fixing and running testcases using minitest, migrating from assets pipeline to Zeitwerk, improving overall performance.</JobItem>
        <JobItem>Created fetchers and parsers using http in Ruby to automate webscraping on television websites and present television program schedules and data in the desired format (JSON, XML, CSV)</JobItem>
      </JobDescription>
    </Job>
    <Job>
      <JobTitle>Software Engineer</JobTitle>
      <Company>Rently</Company>
      <JobPeriod>01/2018 - 04/2019 (Full Time)</JobPeriod>
      <JobDescription>
        <JobItem>Worked on the development of a Home automation system application in Ruby on Rails</JobItem>
        <JobItem>Learned and used docker and AWS services(SNS, IoT, Lambda, DynamoDB, SQS, Cognito).</JobItem>
        <JobItem>Leraned about following agile methodologies(SCRUM), CI/CD, Jira.</JobItem>
      </JobDescription>
    </Job>
    <Job>
      <JobTitle>Software Engineer</JobTitle>
      <Company>Threadsol</Company>
      <JobPeriod>07/2017 - 12/2017 (Full Time)</JobPeriod>
      <JobDescription>
        <JobItem>Created full-stack web applications using Ruby on Rails, maintenance of a garment manufacturing solution product.</JobItem>
        <JobItem>Worked on bug fixes, code testing using rspec, code tracking using git and repositories like BitBucket, atlassian bitbucket, Gitlab.</JobItem>
        <JobItem>Learned deployment process using mina, resulting in faster release cycles and increased productivity.</JobItem>
      </JobDescription>
      <JobPeriod>01/2017 - 06/2017 (Internship)</JobPeriod>
      <JobDescription>
        <JobItem>Gathered hands on knowledge of Ruby and Ruby on Rails.</JobItem>
        <JobItem>Ported a module of an application written in Java to Ruby.</JobItem>
      </JobDescription>
    </Job>
  </ExperienceContainer>
);

export default Experience;
