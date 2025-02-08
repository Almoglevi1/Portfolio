import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import profilePic from '../images/almogProfilePic.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
const AboutMe = () => {

  return (
    <section id="AboutMe">
      <Container className="my-5">
        <Row>
          <Col xs={{ span: 12, order: 2 }} lg={8}>
            <div>
              <br />
              <br />
              <br />
              <p className="aboutMeText">I am a passionate coder with an eye for detail and a focus to produce quality work.</p>
              <p className="aboutMeText">B.Sc. in Computer Science at Holon Institute of Technology (H.I.T).</p>
            </div>
            <br />
            <Button href="#contact-me" variant="primary" className="aboutMeBtn">
              Contact Me
              <span className="material-symbols-outlined">send</span>
            </Button>
            <Button className="aboutMeBtn"
              variant="primary"
              href={`${process.env.PUBLIC_URL}/Almog Levi - CV.pdf`}
              download>
              Download CV
            </Button>
          </Col>
          <Col xs={{ span: 12, order: 1 }} lg={4}>
            <Image src={profilePic} alt="Profile Picture" className="introductionImage" rounded />
            <h2 className="aboutMeTitle">Almog Levi</h2>
            <h4 className="aboutMeText">Software Engineer</h4>
            <div className="justify-content-between">
              <a href="https://www.linkedin.com/in/almoglevi1/" target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} className="mediaIcons" />
              </a>
              <a href="https://github.com/Almoglevi1" target='_blank'>
                <FontAwesomeIcon icon={faGithub} className="mediaIcons" />
              </a>
              <a href="https://www.instagram.com/almoglevi10/" target='_blank'>
                <FontAwesomeIcon icon={faInstagram} className="mediaIcons" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;



