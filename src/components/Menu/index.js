import React, { Component } from 'react'
import './styles.css'

import { Link } from "react-router-dom";
import {
  FaBars,
  FaInstagram,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa'

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";


export default class Menu extends Component {
  constructor(props) {
    super()
    this.state = {
      color: "navbar-transparent",
      collapseOpen: false
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeColor)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor)
  }

  changeColor = () => {
    if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
      this.setState({
        color: "bg-default"
      })
    } else if (document.documentElement.scrollTop < 51 || document.body.scrollTop < 51) {
      this.setState({
        color: "navbar-transparent"
      })
    }
  }

  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    })
  }

  onCollapseExiting = () => {
    this.setState({
      collapseOut: "x'"
    })
  }
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    })
  }
  
  render() {
    return (
      <Navbar className={"fixed-top " + this.state.color} color-on-scroll="100" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" id="navbar-brand" tag={Link}>
              <span>RLUCCAF • </span>Portifolio
            </NavbarBrand>
            
            <button aria-expanded={this.state.collapseOpen} className="navbar-toggler" onClick={this.toggleCollapse} >
              <FaBars />
            </button>
          </div>

          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited} >

            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <h6>RLUCCAF</h6>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar_global" onClick={this.toggleCollapse}>
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>

            <Nav navbar>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/rluccaf/?locale=en_US">
                <FaLinkedin size={18} />
                <span className="nav-link-inner--text d-lg-none ml-2">
                  Linkedin
                </span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://www.instagram.com/roberto.shimokawa">
                  <FaInstagram size={18} />
                  <span className="nav-link-inner--text d-lg-none ml-2">
                    Instagram
                </span>
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="https://github.com/rluccaf">
                  <FaGithub size={18} />
                  <span className="nav-link-inner--text d-lg-none ml-2">
                    Github
                  </span>
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}