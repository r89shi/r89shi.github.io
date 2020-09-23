import React from 'react'
import './style.css'
import bethehero from '../../assets/images/bethehero.png'

import {
  Container,
  Col,
  Row,
  Badge,
  Card,
  CardImg,
  CardBody,
  Button
} from 'reactstrap'

export default function Projects() {
  return (
    <section className="section section-lg pt-lg-0">
      <Container>
        <Row>
          <Col md="12"><h1>PROJECTS FOR FUN...</h1></Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="12">
            <Row className="row-grid">
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <CardImg top width="100%" src={bethehero} alt="Card image cap" />
                    
                    <h6 className="text-danger text-uppercase">bethehero</h6>
                    <p className="description mt-3">
                      Be The Hero desenvolvido durante a semana Omnistack da RocketSeat, trata-se
                      de um site de ajuda para ongs que realizam o resgate de animais.
                      Teve como finalidade praticar as tr&ecirc;s frentes de desenvolvimento.
                    </p>
                    <p className="description mt-3">Backend</p>
                    <div>
                      <Badge color="danger" pill className="mr-1">Node.js</Badge>
                      <Badge color="danger" pill className="mr-1">Javascript</Badge>
                    </div>
                    <p className="description mt-3">Frontend</p>
                    <div>
                      <Badge color="danger" pill className="mr-1">React</Badge>
                    </div>
                    <p className="description mt-3">Mobile</p>
                    <div>
                      <Badge color="danger" pill className="mr-1">React Native</Badge>
                    </div>
                    <Button className="mt-4" color="danger" href="https://github.com/rluccaf/bethehero" >
                      Acesse
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}