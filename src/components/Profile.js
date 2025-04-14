import React from 'react';
import '../styles/components/Profile.css';

const Profile = () => (
  <header className="profile">
    <div className="profile-container">
      <h1 className="profile-name">Somak Chakraborty</h1>
      <div className="profile-title"><h4>Senior Software Engineer</h4></div>
      <div className="profile-description">
        <p>
          I'm a computer science professional with 7 years of experience in building robust, scalable and fault-tollerant SaaS based applications with high throughput and low latency by designing efficient system and database architecture adhering to design principles and implementing necessary design patterns ensuring both performance and reliability. I have worked across multiple product-based as well as service-based organizations from different domains including apparel, home automation, finance, interior design etc. My primary tech stack has been Ruby on Rails but I also have experience with LAMP and MERN stack. I have worked with multiple SQL databases like MySQL and PostgreSQL with noSQL databases like MongoDB and Redis. I also have experience with cloud infrustucture like AWS S3, EC2, Lambda, DynamoDB etc. My CI/CD and devops skills include shell scripts, Github actions, nginx, Docker, Kubernetes, Airflow and Ansible.
        </p>
      </div>
    </div>
  </header>
);

export default Profile;
