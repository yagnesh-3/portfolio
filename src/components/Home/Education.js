import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Optional if not already imported globally

// Sample educationData – replace this with your actual data
import educationData from "./educationData"; // Make sure this file exists and exports an array

const Education = () => {
    return (
        <Container>
            <Row>
                <Col md={12} className="home-about-education">
                    <h1 className="project-heading">
                        My <strong className="purple">Education</strong>
                    </h1>
                    <VerticalTimeline>
                        {educationData.map((item) => (
                            <VerticalTimelineElement
                                key={item.id}
                                className="vertical-timeline-element--education purple"
                                contentStyle={{
                                    background: item.style.background,
                                    color: item.style.color,
                                }}
                                contentArrowStyle={{ borderRight: item.style.arrow }}
                                date={item.date}
                                dateClassName="timeline-date"
                                iconStyle={{ background: "#c770f0", color: "#fff" }}
                                icon={item.icon}
                            >
                                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                                <p>{item.description}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </Col>
            </Row>
        </Container>
    );
};

export default Education;
