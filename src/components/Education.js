import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  border-bottom: 2px solid #000;
  padding-bottom: 5px;
`;

const School = styled.div`
  margin: 20px 0;
`;

const SchoolName = styled.h3`
  margin: 0;
`;

const Degree = styled.p`
  margin-bottom: 20px;
`;

const Education = () => (
  <EducationContainer>
    <Title>Education</Title>
    <School>
      <SchoolName><strong>Banaras Hindu University</strong></SchoolName>
      <Degree>Master of Science (MSc) in Computer Science (2015 - 2017)</Degree>
    </School>
    <School>
      <SchoolName><strong>Calcutta University</strong></SchoolName>
      <Degree>Bachelors of Science (BSc) in Computer Science (2012 - 2015)</Degree>
    </School>
  </EducationContainer>
);

export default Education;
