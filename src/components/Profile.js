import React from 'react';
import styled from 'styled-components';

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.h1`
  margin: 0;
`;

const Title = styled.h2`
  margin: 5px 0;
  font-weight: normal;
`;

const Description = styled.p`
  margin: 10px 0;
`;

const Profile = () => (
  <div className="profile">
    <ProfileDetails>
      <Name>Somak Chakraborty</Name>
      <Title>Senior Software Engineer</Title>
      <Description>
      I'm a forward-thinking computer science professional, adept at navigating the dynamic landscape of startups with finesse. With a robust skill set spanning from full-stack web development to proficiency in cutting-edge technologies like AWS and CI/CD, DevOps. I bring 6+ years of experience ensuring on-time deliverables in high-pressure environments.
      </Description>
    </ProfileDetails>
  </div>
);

export default Profile;
