import React from 'react'
import {
  FaNodeJs,
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaBug,
  FaBootstrap
} from 'react-icons/fa'

import './style.css'

import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from 'reactstrap'

export default function Skills() {
  return(
    <section className="section">
      <Container>
        <Row>
          <Col md="12"><h1>SKILLS</h1></Col>
        </Row>
        <Row className="row-grid align-items-center">
          <Col className="order-lg-1" lg="2">
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="text-center">
                  <div className="">
                    <center><FaJsSquare size={52}/></center>
                    <h6 className="title text-default">Javascript</h6>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col className="order-lg-1" lg="2">
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="text-center">
                  <div className="">
                    <center><FaNodeJs size={52}/></center>
                    <h6 className="title text-default">Node.js</h6>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col className="order-lg-1" lg="2">
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="text-center">
                  <div className="">
                    <center><FaReact size={52}/></center>
                    <h6 className="title text-default">React</h6>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col className="order-lg-1" lg="2">
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="text-center">
                  <div className="">
                    <center><FaReact size={52}/></center>
                    <h6 className="title text-default">R Native</h6>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col className="order-lg-1" lg="2">
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="text-center">
                  <div className="">
                    <center><FaHtml5 size={52}/></center>
                    <h6 className="title text-default">HTML5</h6>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col className="order-lg-1" lg="2">
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="text-center">
                  <div className="">
                    <center><FaCss3 size={52}/></center>
                    <h6 className="title text-default">CSS3</h6>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col className="order-lg-1" lg="2">
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="text-center">
                  <div className="">
                    <center><FaBootstrap size={52}/></center>
                    <h6 className="title text-default">BootStrap</h6>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col className="order-lg-1" lg="2">
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="text-center">
                  <div className="">
                    <center><FaGithub size={52}/></center>
                    <h6 className="title text-default">GitHub</h6>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col className="order-lg-1" lg="2">
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="text-center">
                  <div className="">
                    <center><FaBug size={52}/></center>
                    <h6 className="title text-default">Bug Bounty</h6>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col className="order-lg-1" lg="2">
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="text-center">
                  <div className="">
                    <center><p className="skill-logo">SAP</p></center>
                    <h6 className="title text-default">ABAP</h6>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  )
}