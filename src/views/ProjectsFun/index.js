import React from 'react'
import './style.css'
import bethehero from '../../assets/images/bethehero.png'

import {
  Container,
  Col,
  Row,
  CardColumns,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap'

export default function Projects() {
  return (
    <Container className="container-projects-fun">
      <Row>
        <Col md="12"><h1>PROJECTS FOR FUN...</h1></Col>
      </Row>

      <Row>
        <Col>
          <CardColumns>
            <Card className="projects-fun-card">
              <CardImg top width="100%" src={bethehero} alt="Card image cap" />
              <CardBody>
                <CardTitle>bethehero</CardTitle>
                <CardText>
                  <strong>Backend:</strong> Node.js<br />
                  <strong>Frontend:</strong> React<br /><br />
                  <strong>Mobile:</strong> React Native<br /><br />
                  Be The Hero desenvolvido durante a semana Omnistack da RocketSeat, trata-se 
                  de um site de ajuda para ongs que realizam o resgate de animais.
                  Teve como finalidade praticar as tr&ecirc;s frentes de desenvolvimento.<br /><br />
                  <a href="https://github.com/rluccaf/bethehero" target="_blank" rel="noopener noreferrer">GitHub: bethehero</a>
                </CardText>
              </CardBody>
            </Card>
            
          </CardColumns>
        </Col>
      </Row>
    </Container>
  )
}