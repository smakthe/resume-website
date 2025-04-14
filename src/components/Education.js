import React from 'react';
import {
  EducationContainer,
  Title,
  School,
  SchoolName,
  Degree
} from '../styles/components/EducationStyles';

const Education = () => (
  <EducationContainer>
    <Title>Education</Title>
    <School>
      <SchoolName><strong>Banaras Hindu University</strong></SchoolName>
      <Degree>Master of Science (<abbr title="Master of Science">MSc</abbr>) in Computer Science (2015 - 2017)</Degree>
    </School>
    <School>
      <SchoolName><strong>Calcutta University</strong></SchoolName>
      <Degree>Bachelor of Science (<abbr title="Bachelor of Science">BSc</abbr>) in Computer Science (2012 - 2015)</Degree>
    </School>
  </EducationContainer>
);

export default Education;
