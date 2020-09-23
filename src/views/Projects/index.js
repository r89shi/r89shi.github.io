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
  Card,
  CardBody,
  Badge,
  Button,
  CardImg
} from 'reactstrap'

export default function Projects() {
  return (
    <section className="section section-lg pt-lg-0">
      <Container>
        <Row>
          <Col md="12"><h1>PROJECTS</h1></Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="12">
            <Row className="row-grid">
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <CardImg top width="100%" src={huelma} alt="Card image cap" />
                    
                    <h6 className="text-primary text-uppercase">
                      Huelma
                    </h6>
                    <p className="description mt-3">
                      Projeto do portal da emprea Huelma que presta servi&ccedil;os Florestais.
                    </p>
                    <p className="description mt-3">Backend</p>
                    <div>
                      <Badge color="primary" pill className="mr-1">PHP</Badge>
                    </div>
                    <p className="description mt-3">Frontend</p>
                    <div>
                      <Badge color="primary" pill className="mr-1">HTML</Badge>
                      <Badge color="primary" pill className="mr-1">Javascript</Badge>
                      <Badge color="primary" pill className="mr-1">CSS</Badge>
                      <Badge color="primary" pill className="mr-1">BootStrap</Badge>
                    </div>
                    <Button className="mt-4" color="primary" href="http://huelma.com.br/" >
                      Acesse
                    </Button>
                  </CardBody>
                </Card>
              </Col>

              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <CardImg top width="100%" src={thankaparamedic} alt="Card image cap" />
                    <h6 className="text-success text-uppercase">
                      Thank a Paramedic
                    </h6>
                    <p className="description mt-3">
                      Projeto para agradecer aos param&eacute;dicos da prov&iacute;ncia de Alberta pelo trabalho.
                    </p>
                    <p className="description mt-3">Backend</p>
                    <div>
                      <Badge color="success" pill className="mr-1">PHP</Badge>
                    </div>

                    <Button className="mt-4" color="success" href="https://www.thankaparamedic.com/" >
                      Acesse
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <CardImg top width="100%" src={obra24horas} alt="Card image cap" />
                    <h6 className="text-warning text-uppercase">
                      Obra24horas
                    </h6>
                    <p className="description mt-3">
                      Projeto de reformula&ccedil;&atilde;o do portal da empresa obra24horas.
                    </p>

                    <p className="description mt-3">Backend</p>
                    <div>
                      <Badge color="warning" pill className="mr-1">Cold Fusion</Badge>
                    </div>

                    <p className="description mt-3">Frontend</p>
                    <div>
                      <Badge color="warning" pill className="mr-1">HTML</Badge>
                      <Badge color="warning" pill className="mr-1">Javascript</Badge>
                      <Badge color="warning" pill className="mr-1">CSS</Badge>
                      <Badge color="warning" pill className="mr-1">BootStrap</Badge>
                    </div>

                    <Button className="mt-4" color="warning" href="https://www.obra24horas.com.br" >
                      Acesse
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row className="row-grid">
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                    <CardImg top width="100%" src={eficaz} alt="Card image cap" />
                    <h6 className="text-primary text-uppercase">
                      Eficaz
                    </h6>
                    <p className="description mt-3">
                      Portal para monitoramento de corrente el&eacute;trica dos equipamentos.
                    </p>

                    <p className="description mt-3">Backend</p>
                    <div>
                      <Badge color="primary" pill className="mr-1">PHP</Badge>
                    </div>
                    <p className="description mt-3">Frontend</p>
                    <div>
                      <Badge color="primary" pill className="mr-1">HTML</Badge>
                      <Badge color="primary" pill className="mr-1">Javascript</Badge>
                      <Badge color="primary" pill className="mr-1">CSS</Badge>
                      <Badge color="primary" pill className="mr-1">BootStrap</Badge>
                    </div>

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