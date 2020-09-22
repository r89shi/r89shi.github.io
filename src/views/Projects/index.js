import React from 'react'
import './style.css'

import huelma from '../../assets/images/huelma.png'
import thankaparamedic from '../../assets/images/thankaparamedic.png'
import obra24horas from '../../assets/images/obra24horas.png'
import eficaz from '../../assets/images/eficaz.png'

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
    <Container className="container-projects">
      <Row>
        <Col md="12"><h1>PROJECTS</h1></Col>
      </Row>

      <Row>
        <Col>
          <CardColumns>
            <Card className="projects-card">
              <CardImg top width="100%" src={huelma} alt="Card image cap" />
              <CardBody>
                <CardTitle>Huelma</CardTitle>
                <CardText>
                  <strong>Backend:</strong> PHP<br />
                  <strong>Frontend:</strong> HTML, Javascript, CSS, BootStrap<br /><br />
                  Projeto do portal da emprea Huelma que presta servi&ccedil;os Florestais.<br /><br />
                  <a href="http://huelma.com.br/" target="_blank" rel="noopener noreferrer">Acesse: huelma.com.br</a>
                </CardText>
              </CardBody>
            </Card>

            <Card className="projects-card">
              <CardImg top width="100%" src={thankaparamedic} alt="Card image cap" />
              <CardBody>
                <CardTitle>Thank a Paramedic</CardTitle>
                <CardText>
                  <strong>Backend:</strong> PHP<br />
                  Projeto para agradecer aos param&eacute;dicos da prov&iacute;ncia de Alberta pelo trabalho.<br /><br />
                  <a href="https://www.thankaparamedic.com/" target="_blank" rel="noopener noreferrer">Acesse: www.thankaparamedic.com</a>
                </CardText>
              </CardBody>
            </Card>

            <Card className="projects-card">
              <CardImg top width="100%" src={obra24horas} alt="Card image cap" />
              <CardBody>
                <CardTitle>Obra24horas</CardTitle>
                <CardText>
                  <strong>Backend:</strong> Cold Fusion<br />
                  <strong>Frontend:</strong> HTML, Javascript, CSS, BootStrap<br /><br />
                  Projeto de reformula&ccedil;&atilde;o do portal da empresa obra24horas.<br /><br />
                  <a href="https://www.obra24horas.com.br/" target="_blank" rel="noopener noreferrer">Acesse: www.obra24horas.com.br</a>
                </CardText>
              </CardBody>
            </Card>

            <Card className="projects-card">
              <CardImg top width="100%" src={eficaz} alt="Card image cap" />
              <CardBody>
                <CardTitle>Eficaz</CardTitle>
                <CardText>
                  <strong>Backend:</strong> PHP<br />
                  <strong>Frontend:</strong> HTML, Javascript, CSS, BootStrap<br /><br />
                  Portal para monitoramento de corrente el&eacute;trica dos equipamentos.<br /><br />
                </CardText>
              </CardBody>
            </Card>
            
          </CardColumns>
        </Col>
      </Row>
    </Container>
  )
}