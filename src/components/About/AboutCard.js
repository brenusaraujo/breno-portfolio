import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Este curso será dividido em duas partes iniciais: <span className="purple">English 101 e English 202.</span> Na primeira parte, o foco principal estará na construção do seu vocabulário e no domínio das estruturas linguísticas, permitindo que você se familiarize gradualmente com o idioma.
            <br />Já o <span className="purple">English 202</span> se concentrará em aprofundar suas habilidades básicas de maneira a torná-lo mais fluente, aproximando-o cada vez mais da verdadeira fluência no idioma.
            <br />
            <br />
            Além de professor, algumas outras atividades que eu gosto de fazer:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar videogames
            </li>
            <li className="about-activity">
              <ImPointRight /> Cozinhar
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
            <li className="about-activity">
              <ImPointRight /> Praticar esportes e muito mais!
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
