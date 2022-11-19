import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import onlinestore from "../../Assets/Projects/onlinestore.png";
import trivia from "../../Assets/Projects/trivia.png";
import trybetunes from "../../Assets/Projects/trybetunes.png";
import recipeapp from "../../Assets/Projects/recipeapp.png";
import trybewallet from "../../Assets/Projects/trybewallet.png";
import storemanager from "../../Assets/Projects/storemanager.jpeg";
import oop from '../../Assets/Projects/oop.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipeapp}
              isBlog={false}
              title="Recipe App"
              description="In this project I was responsible for developing, in group, a recipe app, using React Hooks and Context API. On it, it will be possible to: see, search, filter, favorite and follow the progress of meals and drinks recipes. I used two distincts APIs, one for meals and another for drinks. The layout is designed for mobile devices, that's why it was coded for smaller screens. Customized using Styled Components."
              ghLink="https://bit.ly/3S5Gfpg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlinestore}
              isBlog={false}
              title="Frontend Online Store"
              description="In this project I was responsible for developing a simplified version, without using a database, of an online store, developing in group its features. Using this app, the user is capable to: search, add and remove products from a shopping cart; see the details and previous reviews of a product, as well as create new reviews and; simulate a purchase of the selected items."
              ghLink="https://bit.ly/3xvS93O"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trybewallet}
              isBlog={false}
              title="TrybeWallet"
              description="In this project I was responsible for developing an expenses control wallet including a currency converter. Using this app, the user is capable to: add, remove or edit an expense; see a dynamic table of his/hers expenses, see the total expenses converted to a chosen currency. Customized using Styled Components."
              ghLink="https://bit.ly/3eYIEnl"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trivia}
              isBlog={false}
              title="Trivia"
              description="In this project, I was responsible for developing a Trivia game, using React and Redux. In this app, the user is capable of: sign in; access the game area; choose an answer for each question; be redirected, after 5 streak answers, to a score screen, where the text shown depends of how many correct answers; see a ranking screen in the end of each game; set up some game options in a settings screen;"
              ghLink="https://bit.ly/3qR3lUQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trybetunes}
              isBlog={false}
              title="TrybeTunes"
              description="In this project, I developed an app capable of playing music from different bands and artists, creating a playlist of your favorite music and editing the user's profile. Also, in this app, the user is capable of: search for a band or an artist; list the available albuns of this band or artist; see the music of a selected album; see the favorites music; see the user's profile; edit the user's profile."
              ghLink="https://bit.ly/3QWEae6"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oop}
              isBlog={false}
              title="Trybers and Dragons"
              description="In this project, I developed an app using Oriented-Object Programin and SOLID principles. This app simulate a RPG game. "
              ghLink="https://bit.ly/3QWEae6"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storemanager}
              isBlog={false}
              title="Store Manager"
              description="In this project, I was resposible to build and app using MSC (Model, Service and Controller) archtecture. This app is for a store, and manage its sales and products. "
              ghLink="https://bit.ly/3g7TBUc"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
