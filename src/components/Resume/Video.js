import React from 'react';
import { Container, Row, Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import Particle from '../Particle';
import { useNavigate } from 'react-router-dom';
const Video = () => {


    const navigate = useNavigate();
    return (
        <div>
            <Particle />
            <Container fluid className="resume-section">
                {/* Video Resume Heading */}
                <Row style={{ justifyContent: "center", marginTop: "60px" }}>
                    <h2
                        className="project-heading"
                        style={{ color: "var(--imp-text-color)", paddingBottom: "10px" }}
                    >
                        My <strong className="purple">Video Resume</strong>
                    </h2>
                </Row>

                {/* Subtitle */}
                <Row
                    style={{
                        justifyContent: "center",
                        textAlign: "center",
                        paddingBottom: "30px",
                    }}
                >
                    <p
                        style={{
                            maxWidth: "800px",
                            color: "var(--sub-text-color)",
                            fontSize: "18px",
                        }}
                    >
                        A dynamic presentation of my skills and experience
                    </p>
                </Row>

                {/* Local Video Embed */}
                <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
                    <div
                        style={{
                            width: "100%",
                            maxWidth: "720px",
                            position: "relative",
                            borderRadius: "12px",
                            overflow: "hidden",
                        }}
                    >
                        <iframe
                            src="https://drive.google.com/file/d/1Ai4qdYxhkbMajDr7Exvr7CB-HHNbNeqG/preview"
                            allow="autoplay"
                            allowFullScreen
                            title="Video Resume"
                            style={{
                                width: "100%",
                                height: "360px",
                                border: "none",
                                borderRadius: "12px",
                            }}
                        ></iframe>

                    </div>
                </Row>

                {/* Buttons */}
                {/* Buttons */}
                <Row style={{ justifyContent: "center", marginBottom: "40px" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: "15px",
                            textAlign: "center",
                        }}
                    >
                        <Link to="/resume">
                            <Button variant="primary" className="px-4 py-2">
                                Download CV
                            </Button>
                        </Link>
                        <Button
                            variant="primary"
                            className="px-4 py-2"
                            onClick={() => navigate("/", { state: { scrollToContact: true } })}
                        >
                            Contact
                        </Button>
                    </div>
                </Row>


                {/* About This Video Section */}
                <Row
                    style={{
                        justifyContent: "center",
                        textAlign: "center",
                        paddingBottom: "60px",
                    }}
                >
                    <p
                        style={{
                            maxWidth: "800px",
                            fontSize: "16px",
                            color: "var(--sub-text-color)",
                        }}
                    >
                        <strong>About This Video</strong>
                        <br />
                        This video resume highlights my professional journey, key skills,
                        and what makes me a great candidate. In just a few minutes, you'll
                        get to know me better than any traditional resume could show.
                    </p>
                </Row>
            </Container>
        </div>
    );
};

export default Video;
