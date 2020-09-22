import React, { Component } from 'react'
import './styles.css'

import {
  Container,
  Row,
  Col
} from 'reactstrap'

export default class Footer extends Component {
  render() {
    return(
      <Container fluid={true} className="container-footer">
        <Row>
          <Col md="6" className="text-left">
            <p>Get in touch with me by my social medias</p>
          </Col>
          <Col md="6" className="text-right">
            <p>@2020 Copyright All Rights Reserved. rluccaf</p>
          </Col>
        </Row>
      </Container>
    )
  }
}