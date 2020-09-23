import React, { Component } from 'react'
import './styles.css'

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

import {
  Container,
  Row,
  Col,
  Button,
  UncontrolledTooltip,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

export default class Footer extends Component {
  render() {
    return(
      // <Container className="container-footer">
      //   <Row>
      //     <Col md="6" className="text-left">
      //       <p>Get in touch with me by my social medias</p>
      //     </Col>
      //     <Col md="6" className="text-right">
      //       <p>@2020 Copyright All Rights Reserved. rluccaf</p>
      //     </Col>
      //   </Row>
      // </Container>

      <footer className=" footer">
        <Container>
          <Row className=" row-grid align-items-center mb-5">
            <Col lg="6">
              <h3 className=" text-primary font-weight-light mb-2">
                Thank you for visiting me!
              </h3>
              <h4 className=" mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button className="btn-icon-only rounded-circle ml-1" color="facebook" href="https://www.linkedin.com/in/rluccaf/?locale=en_US" id="tooltip837440414" target="_blank" >
                <span className="btn-inner--icon">
                  <FaLinkedin />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip837440414">
                Get in touch
              </UncontrolledTooltip>
              <Button className="btn-icon-only rounded-circle ml-1" color="dribbble" href="https://www.instagram.com/roberto.shimokawa" id="tooltip829810202" target="_blank">
                <span className="btn-inner--icon">
                  <FaInstagram />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip829810202">
                Follow me
              </UncontrolledTooltip>
              <Button className="btn-icon-only rounded-circle ml-1" color="github" href="https://github.com/rluccaf" id="tooltip495507257" target="_blank">
                <span className="btn-inner--icon">
                  <FaGithub />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip495507257">
                Follow me on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
          <hr />
          <Row className=" align-items-center justify-content-md-between">
            <Col md="6">
              <div className=" copyright">
                © {new Date().getFullYear()}{" "}
                <a href="http://rluccaf.github.io/" target="_blank" >
                  RLUCCAF
                </a>.
              </div>
            </Col>
            <Col md="6">
              <Nav className=" nav-footer justify-content-end">
                <NavItem>
                  <NavLink href="https://github.com/timcreative/freebies/blob/master/LICENSE.md" target="_blank" >
                    MIT License
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://demos.creative-tim.com/argon-design-system-react/?_ga=2.239595847.597608044.1600775882-387275385.1600368073#/documentation/overview"
                    target="_blank"
                  >
                    Bootstrap credits
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
        </footer>
    )
  }
}