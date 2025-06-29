import {
  ProfileContainer,
  ProfileDetails,
  Name,
  Title,
  Description,
} from "../styles/components/ProfileStyles";

const Profile = () => (
  <ProfileContainer className="profile">
    <ProfileDetails>
      <Name>Somak Chakraborty</Name>
      <Title>
        <h4>Senior Software Engineer</h4>
      </Title>
      <Description>
        <p>
          I'm a computer science professional with 7 years of experience in
          building robust, scalable and fault-tolerant SaaS-based applications
          with high throughput and low latency by designing efficient system and
          database architecture adhering to design principles and implementing
          necessary design patterns ensuring both performance and reliability. I
          have worked across multiple product-based as well as service-based
          organizations from different domains including apparel, home
          automation, finance, interior design etc. My primary tech stack has
          been Ruby on Rails but I also have experience with LAMP/WAMP and MERN
          stack. I have worked with multiple SQL databases like MySQL and
          PostgreSQL as well as noSQL databases like MongoDB and Redis. I also
          have experience with cloud infrastructure like AWS S3, EC2, Lambda,
          DynamoDB etc. My CI/CD and DevOps skills include shell scripts, Github
          actions, nginx, Docker, Kubernetes, Airflow and Ansible.
        </p>
      </Description>
    </ProfileDetails>
  </ProfileContainer>
);

export default Profile;
