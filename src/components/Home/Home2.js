import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a former english teacher (I still teach for a few people). 🇺🇸
              <br />
              In 2020 I started work from home, 'cause of the pandemic. And I realise
              how
              <br />
              amazing is to have my loved ones around, work from anywhere and still be
              <br />
              really productive. So I came back to studying fullstack development, that I had
              <br />
              studied in my bachelor's degree (2015-2019) in Exact Sciences and Tecnologies,
              <br />
              <a
                href="http://ufrb.edu.br"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'inherit' }}
                className="purple"
              >
                UFRB (Federal University of Bahia's Recôncavo). {" "}
              </a>
              I also started a course at
              <br />
              Trybe {" "}
              <a
                href="https://www.betrybe.com/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'inherit' }}
                className="purple"
              >
                (check how it works!)
              </a> to be an fullstack webdeveloper.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> React, TypeScript, Javascript, MySQL, Python, Node.JS and MongoDB. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies, Products and Data Analytics. </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <i><b className="purple">Node.js using Typescript, MySQL, Python and Java,</b></i> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/brenusaraujo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/brenus96"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/brenusaraujo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
