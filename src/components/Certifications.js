import {
  CertificationsContainer,
  Title,
  CertificationItem,
  CertificationList,
  CertificationListContainer,
} from "../styles/components/CertificationsStyles";

const Certifications = () => {
  return (
    <CertificationsContainer>
      <Title>Certifications</Title>
      <CertificationListContainer className="certification-list">
        <CertificationList>
          <CertificationItem>
            <a
              href="https://cutshort.io/certificate/6270"
              aria-label="Cutshort Certified JavaScript Basic"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cutshort Certified JavaScript Basic
            </a>
          </CertificationItem>
          <CertificationItem>
            <a
              href="https://cutshort.io/certificate/6269"
              aria-label="Cutshort Certified Ruby Basic"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cutshort Certified Ruby Basic
            </a>
          </CertificationItem>
        </CertificationList>
      </CertificationListContainer>
    </CertificationsContainer>
  );
};

export default Certifications;
