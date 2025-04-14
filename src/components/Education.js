import React from 'react';
import '../styles/components/Education.css';

const Education = () => (
  <div className="education-container">
    <h2 className="education-title">Education</h2>
    <div className="school">
      <h3 className="school-name"><strong>Banaras Hindu University</strong></h3>
      <p className="degree">Master of Science (<abbr title="Master of Science">MSc</abbr>) in Computer Science (2015 - 2017)</p>
    </div>
    <div className="school">
      <h3 className="school-name"><strong>Calcutta University</strong></h3>
      <p className="degree">Bachelor of Science (<abbr title="Bachelor of Science">BSc</abbr>) in Computer Science (2012 - 2015)</p>
    </div>
  </div>
);

export default Education;
