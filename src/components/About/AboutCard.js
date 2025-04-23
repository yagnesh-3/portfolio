import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">G Y L G Rayulu</span> from{" "}
            <span className="purple">Andhra Pradesh,India</span>.
            <br />
            I’m currently pursuing my <span className="purple">B.Tech in Computer Science and Engineering</span>.
            <br />
            I’m passionate about building software that solves real-world problems and brings value to people.
            <br />
            I enjoy exploring new technologies, working on impactful projects, and continuously learning to improve my skills.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Learning New Tech
            </li>
            <li className="about-activity">
              <ImPointRight />Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight />DIY Electronics Projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Yagnesh</footer>
        </blockquote>
      </Card.Body>
    </Card>

  );
}

export default AboutCard;
