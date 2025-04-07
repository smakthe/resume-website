import React from 'react';
import styled from 'styled-components';
import { containerStyles } from '../styles/shared';

const ProfileDetails = styled.div`
  ${containerStyles}
`;

const Name = styled.h1`
  margin: 0;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Title = styled.h2`
  margin: 5px 0;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Profile = () => (
  <header className="profile">
    <ProfileDetails>
      <Name>Somak Chakraborty</Name>
      <Title><h4>Senior Software Engineer</h4></Title>
      <Description>
        <p>
          I'm a computer science professional with 7 years of experience in building robust, scalable and fault-tollerant SaaS based applications with high throughput and low latency by designing efficient system and database architecture adhering to design principles and implementing necessary design patterns ensuring both performance and reliability. I have worked across multiple product-based as well as service-based organizations from different domains including apparel, home automation, finance, interior design etc. My primary tech stack has been Ruby on Rails but I also have experience with LAMP and MERN stack. I have worked with multiple SQL databases like MySQL and PostgreSQL with noSQL databases like MongoDB and Redis. I also have experience with cloud infrustucture like AWS S3, EC2, Lambda, DynamoDB etc. My CI/CD and devops skills include shell scripts, Github actions, nginx, Docker, Kubernetes, Airflow and Ansible.
        </p>
      </Description>
    </ProfileDetails>
  </header>
);

export default Profile;
