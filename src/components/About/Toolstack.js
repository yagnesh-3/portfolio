import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiLinux,
  SiDocker,
} from "react-icons/si";
import { DiWindows } from "react-icons/di";

const tools = [
  { icon: <DiWindows />, label: "Windows" },
  { icon: <SiLinux />, label: "Linux" },
  { icon: <SiDocker />, label: "Docker" },
  { icon: <SiVisualstudiocode />, label: "VS Code" },
  { icon: <SiPostman />, label: "Postman" },
  { icon: <SiVercel />, label: "Vercel" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons text-center">
          {tool.icon}
          <div style={{ marginTop: "10px", fontSize: "14px" }}>{tool.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
