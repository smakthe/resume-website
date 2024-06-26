import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'


const ContactContainer = styled.div`
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  text-align: left;
`;

const Title = styled.h2`
  border-bottom: 2px solid #000;
  padding-bottom: 5px;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Icon = styled.span`
  margin-right: 10px;
  font-size: 18px;
`;

const ContactText = styled.span`
  font-size: 16px;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contact</Title>
      <ContactInfo>
        <Icon>📞</Icon>
        <ContactText>+91-9163689800</ContactText>
      </ContactInfo>
      <ContactInfo>
        <Icon>📧</Icon>
        <ContactText>smtp.connectmak@outlook.com</ContactText>
      </ContactInfo>
      <ContactInfo>
        <Icon>📍</Icon>
        <ContactText>Bengaluru, KA, India</ContactText>
      </ContactInfo>
      <Icon><SocialIcon target="_blank" url="https://github.com/smakthe"/></Icon>
      <Icon><SocialIcon target="_blank" url="https://www.linkedin.com/in/scmakra99"/></Icon>
    </ContactContainer>
  );
};

export default Contact;
