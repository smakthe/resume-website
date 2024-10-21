import React from 'react';
import styled from 'styled-components';

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
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
  <div className="profile">
    <ProfileDetails>
      <Name>Somak Chakraborty</Name>
      <Title><p>Senior Software Engineer</p></Title>
      <Description>
        <p>
          I'm a forward-thinking computer science professional with a robust skill set spanning from full-stack web development to proficiency in cutting-edge technologies like AWS and CI/CD, DevOps.
          With 7.5 years of hands-on experience in SaaS companies, I have developed robust and scalable Rails applications by applying optimization techniques and adhering to S.O.L.I.D. design principles.
          I also possess extensive experience in leveraging Amazon Web Services such as S3, EC2, Lambda, DynamoDB, SNS, SQS, Cognito etc for deployment, scaling, and management of web applications.
          I have implemented CI/CD pipelines using tools like CircleCI and GitHub Actions to automate build, test, and deploy microservices, ensuring smooth and reliable product releases.
          My DevOps experience includes working with Docker and Kubernetes for containerization and orchestration, enhancing application scalability and reliability.
        </p>
      </Description>
    </ProfileDetails>
  </div>
);

export default Profile;
