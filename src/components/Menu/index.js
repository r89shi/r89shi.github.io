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
  UncontrolledTooltip
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
    if (document.documentElement.scrollTop > 99 || document.body.scrollTop > 99) {
      this.setState({
        color: "bg-info"
      })
    } else if (document.documentElement.scrollTop < 100 || document.body.scrollTop < 100) {
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

            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              Designed and Coded by Roberto Falc&atilde;o
            </UncontrolledTooltip>

            <button aria-expanded={this.state.collapseOpen} className="navbar-toggler navbar-toggler" onClick={this.toggleCollapse} >
              <FaBars />
            </button>
          </div>

          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited} >

            <Nav navbar>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/rluccaf/?locale=en_US">
                <FaLinkedin size={20} />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://www.instagram.com/roberto.shimokawa">
                  <FaInstagram size={20} />
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="https://github.com/rluccaf">
                  <FaGithub size={20} />
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}