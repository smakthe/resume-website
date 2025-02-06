import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  border-bottom: 2px solid #000;
  padding-bottom: 5px;
`;

const SkillList = styled.dl`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
`;

const SkillItem = styled.dt`
  margin-bottom: 10px;
`;

const Skills = () => (
  <SkillsContainer>
    <Title>Skills</Title>
    <SkillList>
      <SkillItem><strong>Languages:</strong> Ruby, JavaScript, TypeScript Python, C, C++, Java, HTML & CSS</SkillItem>
      <SkillItem><strong>Testing Frameworks:</strong> Rspec, E2E</SkillItem>
      <SkillItem><strong>Relational Databases:</strong> MySQL, PostgreSQL</SkillItem>
      <SkillItem><strong>Non-relational Databases:</strong> MongoDB, Redis</SkillItem>
      <SkillItem><strong>MVC Framework:</strong> Ruby on Rails</SkillItem>
      <SkillItem><strong>Meta-Frameworks and Libraries:</strong> React.js, Node.js, Express.js, Nest.js, Sveltte</SkillItem>
      <SkillItem><strong>AWS Technologies:</strong> DynamoDB, EC2, IoT, Lambda, S3, SNS, SQS, Cognito</SkillItem>
      <SkillItem><strong>CI/CD and Devops:</strong> Git, GitHub, GitHub Action, Docker, Kubernetes</SkillItem>
    </SkillList>
  </SkillsContainer>
);

export default Skills;
