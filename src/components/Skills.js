import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  border-bottom: 2px solid #000;
  padding-bottom: 5px;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
`;

const SkillItem = styled.li`
  margin-bottom: 10px;
`;

const Skills = () => (
  <SkillsContainer>
    <Title>Skills</Title>
    <SkillList>
      <SkillItem><strong>Languages:</strong> Ruby, Python, C, C++, Java, JavaScript, HTML & CSS</SkillItem>
      <SkillItem><strong>Relational Databases:</strong> MySQL, PostgreSQL</SkillItem>
      <SkillItem><strong>Non-relational Databases:</strong> MongoDB, Redis</SkillItem>
      <SkillItem><strong>Frameworks and Libraries:</strong> Ruby on Rails, Node.js, Express.js</SkillItem>
      <SkillItem><strong>AWS Technologies:</strong> DynamoDB, EC2, IoT, Lambda, S3, SNS, SQS</SkillItem>
      <SkillItem><strong>CI/CD and Devops:</strong> Git, GitHub, GitHubCI, Docker, Kubernetes</SkillItem>
    </SkillList>
  </SkillsContainer>
);

export default Skills;
