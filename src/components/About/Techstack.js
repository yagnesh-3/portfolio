import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiFlask,
} from "react-icons/si";

function Techstack() {
  const techItems = [
    { icon: <DiHtml5 />, name: "HTML" },
    { icon: <DiCss3 />, name: "CSS" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <DiGit />, name: "Git" },
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techItems.map((item, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons text-center">
          <div style={{ fontSize: "2.5rem" }}>{item.icon}</div>
          <div style={{ marginTop: "8px", fontSize: "1rem", color: "#fff" }}>{item.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
