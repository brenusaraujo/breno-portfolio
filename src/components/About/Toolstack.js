import React from "react";
import { Col, Row } from "react-bootstrap";

import portugues from "../../Assets/brasil.png"
import espanhol from "../../Assets/espanha.png"
import ingles from "../../Assets/reino-unido.png"
import russo from "../../Assets/russia.png"
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{width: '10rem'}} src={portugues} alt="" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{width: '10rem'}} src={ingles} alt="" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{width: '10rem'}} src={espanhol} alt="" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img style={{width: '10rem'}} src={russo} alt="" />

      </Col>

    </Row>
  );
}

export default Toolstack;
