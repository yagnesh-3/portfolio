import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
          username="adfar-136"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Row>

      {/* <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop: "50px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">LeetCode</strong> Progress
        </h1>
        <img
          src="https://leetcard.jacoblin.cool/yagneshg?ext=heatmap"
          alt="LeetCode stats"
          style={{ maxWidth: "100%", borderRadius: "10px" }}
        />
      </Row> */}
    </>
  );
}

export default Github;
