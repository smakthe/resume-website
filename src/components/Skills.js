import React from 'react';
import '../styles/components/Skills.css';

const Skills = () => (
  <div className="skills-container">
    <h2 className="skills-title">Skills</h2>
    <dl className="skill-list">
      <dt className="skill-item"><strong>Compiled Low-level Languages:</strong> C, C++, Java, Go, Rust </dt>
      <dt className="skill-item"><strong>Interpreted High-level Languages:</strong> Ruby, JavaScript, TypeScript, Python, PHP </dt>
      <dt className="skill-item"><strong>Relational Databases:</strong> MySQL, PostgreSQL </dt>
      <dt className="skill-item"><strong>Non-relational Databases:</strong> MongoDB, Redis </dt>
      <dt className="skill-item"><strong>MVC Frameworks:</strong> Ruby on Rails, MERN stack </dt>
      <dt className="skill-item"><strong>Meta-Frameworks and Libraries:</strong> Next.js, Sveltte, Qwik.js </dt>
      <dt className="skill-item"><strong>AWS Technologies:</strong> S3, EC2, Lambda, DynamoDB, SNS, SQS, Cognito </dt>
      <dt className="skill-item"><strong>CI/CD:</strong> Git, GitHub, GitHub Action </dt>
      <dt className="skill-item"><strong>DevOps:</strong> Shell Script, Docker, Kubernetes, Airflow, Ansible </dt>
    </dl>
  </div>
);

export default Skills;
