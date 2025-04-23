import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Images for the projects

import digiserve from "../../Assets/Projects/DigiServe.png";
import ums from "../../Assets/Projects/ums.png";
import urlshort from "../../Assets/Projects/URL_Shortner.png";

const projectData = [
  {
    id: 1,
    imgPath: digiserve,
    title: "DigiServe",
    description:
      "Digiserve is a full-featured restaurant Point of Sale (POS) system designed to streamline operations between waiters and kitchen staff. It enables efficient order placement, real-time kitchen updates, multi-waiter handling, and seamless payment tracking—all in one intuitive interface.",
    ghLink: "https://github.com/yagnesh-3/DigiServe",
    // demoLink: "https://chatify-49.web.app/",
  },
  {
    id: 2,
    imgPath: urlshort,
    title: "URL Shortner",
    description:
      "This is a secure, Flask-based custom URL shortener with user authentication. It allows users to register/login, create personalized short URLs, and manage them through a clean dashboard. Data is stored using SQLite, making it lightweight yet effective",
    ghLink: "https://github.com/yagnesh-3/short-url",
    demoLink: "https://short-url-404n.onrender.com/",
  },
  {
    id: 3,
    imgPath: ums,
    title: "UMS",
    description:
      "The UMS (University Management System) frontend is a role-based responsive web interface built with modern UI/UX principles. Students can check their timetables, attendance, results, and exams, while faculty can update these details efficiently from their side.",
    ghLink: "https://github.com/yagnesh-3/UMS",
    demoLink: "https://ums-omega.vercel.app/",
  },

];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
