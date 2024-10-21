import React from 'react';
import styled from 'styled-components';

const CertificationsContainer = styled.div`
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  color: #000;
  border-bottom: 2px solid #000;
  padding-bottom: 5px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CertificationItem = styled.li`
  font-size: 18px;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


const CertificationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Certifications = () => {
  return (
    <CertificationsContainer>
      <Title>Certifications</Title>
      <div className="certification-list">
        <CertificationList>
          <CertificationItem><a href="https://cutshort.io/certificate/6270">Cutshort Certified JavaScript Basic</a></CertificationItem>
          <CertificationItem><a href="https://cutshort.io/certificate/6269">Cutshort Certified Ruby Basic</a></CertificationItem>
        </CertificationList>
      </div>
    </CertificationsContainer>
  );
};

export default Certifications;
