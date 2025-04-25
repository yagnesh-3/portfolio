import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";


function Contact() {
    return (
        <section className="contact-section">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} className="contact-form-wrapper">
                        <h1 className="heading">
                            Get in <span className="purple">Touch</span>
                        </h1>
                        <p className="description">
                            Feel free to connect with me. I’ll get back as soon as possible!
                        </p>
                        <form className="contact-form">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea rows="5" placeholder="Your Message" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>

                        {/* <div className="social-icons">
                            <a href="mailto:example@email.com" target="_blank" rel="noreferrer">
                                <AiOutlineMail />
                            </a>
                            <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
                                <AiFillGithub />
                            </a>
                            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
                                <AiFillLinkedin />
                            </a>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
