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
  CardTitle
} from 'reactstrap'

export default function Skills() {
  return(
    <Container className="container-skills">
      <Row>
        <Col md="12">
          <h1>SKILLS</h1>
        </Col>
      </Row>
      <Row>
        <Col md="3"xs="4">
          <Card body inverse className="card-skills text-center">
            <center><FaJsSquare size={52}/></center>
            <CardTitle>Javascript</CardTitle>
          </Card>
        </Col>

        <Col md="3"xs="4">
          <Card body inverse className="card-skills text-center">
            <center><FaNodeJs size={52}/></center>
            <CardTitle>Node.js</CardTitle>
          </Card>
        </Col>

        <Col md="3"xs="4">
          <Card body inverse className="card-skills text-center">
            <center><FaReact size={52}/></center>
            <CardTitle>React</CardTitle>
          </Card>
        </Col>

        <Col md="3"xs="4">
          <Card body inverse className="card-skills text-center">
            <center><FaReact size={52}/></center>
            <CardTitle>React Native</CardTitle>
          </Card>
        </Col>

        <Col md="3"xs="4">
          <Card body inverse className="card-skills text-center">
            <center><FaHtml5 size={52}/></center>
            <CardTitle>HTML</CardTitle>
          </Card>
        </Col>

        <Col md="3"xs="4">
          <Card body inverse className="card-skills text-center">
            <center><FaCss3 size={52}/></center>
            <CardTitle>CSS</CardTitle>
          </Card>
        </Col>

        <Col md="3"xs="4">
          <Card body inverse className="card-skills text-center">
            <center><FaBootstrap size={52} /></center>
            <CardTitle>BootStrap</CardTitle>
          </Card>
        </Col>

        <Col md="3"xs="4">
          <Card body inverse className="card-skills text-center">
            <center><FaGithub size={52}/></center>
            <CardTitle>GitHub</CardTitle>
          </Card>
        </Col>

        <Col md="3"xs="4">
          <Card body inverse className="card-skills text-center">
            <center><FaBug size={52}/></center>
            <CardTitle>Bug Bounty</CardTitle>
          </Card>
        </Col>

        <Col md="3"xs="4">
          <Card body inverse className="card-skills text-center">
            <center><span>SAP</span></center>
            <CardTitle>ABAP</CardTitle>
          </Card>
        </Col>

      </Row>
    </Container>
  )
}