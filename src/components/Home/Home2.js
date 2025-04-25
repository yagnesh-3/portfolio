import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/photo.jpg";
import myImg from "../../Assets/photo.png";
import Tilt from "react-parallax-tilt";
import educationData from "./educationData";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail, AiOutlineWhatsApp, AiOutlinePhone
} from "react-icons/ai";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';

import { FaLinkedinIn } from "react-icons/fa";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Education from "./Education";
import Certifications from "../Certifications/Certifications";
import Github from "../About/Github";
import Contact from "../Contact";
import { useLocation } from "react-router-dom";

function Home2() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Computer Science student who’s passionate about building practical and impactful software.
              I’ve developed a strong foundation in programming and continue learning every day.
              <br />
              <br />I’m fluent in technologies like
              <i>
                <b className="purple"> C++, JavaScript, and Python. </b>
              </i>
              <br />
              <br />
              My areas of interest include building &nbsp;
              <i>
                <b className="purple">modern web applications, backend systems</b> and creating efficient, user-friendly digital solutions.
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple"> Modern JavaScript Libraries and Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row >

      </Container>
      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>
      <div id="certifications">
        <Certifications />
      </div>


      <Education />

      <Github />
      <div id="contact">
        <Contact />
      </div>


    </Container>
  );
}
export default Home2;
