import React from 'react';
import '../styles/components/Certifications.css';

const Certifications = () => {
  return (
    <div className="certifications-container">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certification-list-container">
        <ul className="certification-list">
          <li className="certification-item">
            <a 
              href="https://cutshort.io/certificate/6270"
              aria-label="Cutshort Certified JavaScript Basic"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cutshort Certified JavaScript Basic
            </a>
          </li>
          <li className="certification-item">
            <a 
              href="https://cutshort.io/certificate/6269"
              aria-label="Cutshort Certified Ruby Basic"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cutshort Certified Ruby Basic
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
