import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

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
              Meu nome é Breno e estou pronto para ser seu guia e parceiro nessa incrível jornada pela língua inglesa! Tenho a certeza de que juntos, de maneira leve e intuitiva, alcançaremos a tão desejada fluência. Com 4 anos de experiência como professor em uma renomada escola de idiomas, trabalhei com alunos de todas as idades. No Brasil, tive a oportunidade de conhecer e colaborar com pessoas de diferentes nacionalidades em eventos internacionais realizados em nosso país.

              <br />
              <br />

              Atualmente, sou um desenvolvedor em uma empresa dos Estados Unidos, onde uso o inglês diariamente. Há 2 anos, moro em Portugal e encontrei aqui a oportunidade de ajudar muitas pessoas a conquistar suas metas no aprendizado do inglês. Sou apaixonado por idiomas e estou sempre buscando aprender coisas novas. Agora, estou empolgado para compartilhar meus conhecimentos e te auxiliar no caminho para dominar o inglês. Let’s go!
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
              Você consegue me <span className="purple">encontrar </span>nesses links
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
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaWhatsapp />
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
