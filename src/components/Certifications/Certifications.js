import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Images for the projects


import ibmCert from "../../Assets/ibm.jpg";
import iitCert from "../../Assets/nptle.jpg";
import mernTraining from "../../Assets/mern.avif";
import dsaTraining from "../../Assets/dsa.jpg";

const projectData = [
  {
    id: 1,
    imgPath: ibmCert, // You can add the certificate thumbnail image here
    title: "IBM DevOps and Software Engineering",
    description:
      "A professional certification program that covered the principles of DevOps, software development lifecycle, CI/CD pipelines, cloud-native apps, and agile methodologies. Offered by IBM via Coursera.",
    // Certificate link
  },
  {
    id: 2,
    imgPath: iitCert, // Add certificate image for IIT course if available
    title: "Ethical Hacking Specialization - IIT Kharagpur (NPTEL)",
    description:
      "An in-depth course on ethical hacking covering network security, vulnerability assessment, penetration testing, and cybersecurity principles. Certified by IIT Kharagpur through NPTEL.",
    ghLink: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs94/Course/NPTEL24CS94S45690077004029033.pdf",
  },
  {
    id: 3,
    imgPath: mernTraining, // Optional image like a logo or banner
    title: "MERN Stack Training & Certification",
    description:
      "Hands-on training in MongoDB, Express.js, React, and Node.js. Developed dynamic full-stack applications with RESTful APIs, integrated backend/frontend, and built real-world projects.",
  },
  {
    id: 4,
    imgPath: dsaTraining, // Optional image or course provider logo
    title: "Data Structures and Algorithms - Programming Pathshala",
    description:
      "Mastered core data structures and algorithms including arrays, linked lists, trees, graphs, recursion, dynamic programming, and complexity analysis. Strengthened problem-solving through real coding problems.",
  },

];

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Trainings & <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          A collection of credentials and trainings that highlight my dedication to continuous learning and growth.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}

                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
