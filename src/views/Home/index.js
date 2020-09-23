import React, { Fragment } from 'react'

import './styles.css'
import myphoto from '../../assets/images/myphoto.png'


import {
  Container,
  Col,
  Row,
  Card,
  Button
} from 'reactstrap'

export default function Home() {
  return (
    <Fragment>
      <Container fluid={true} className="container-home">
        <Container className="profile-page">
          <Card className="card-profile shadow">
            <div className="px-4">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="http://rluccaf.github.io/">
                      <img alt="..." className="rounded-circle img-home" src={myphoto} />
                    </a>
                  </div>
                </Col>
                <Col className="order-lg-3 text-lg-right align-self-lg-center" lg="4" >
                  <div className="card-profile-actions py-4 mt-lg-0">
                    <Button className="mr-4" color="info" href="https://www.linkedin.com/in/rluccaf/?locale=en_US" size="sm" >
                      Message
                    </Button>
                  </div>
                </Col>
                <Col className="order-lg-1" lg="4">
                  <div className="card-profile-stats d-flex justify-content-center">
                    <div>
                      <span className="heading">46</span>
                      <span className="description">Github Projects</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="text-center mt-5">
                <h3>
                  ROBERTO FALC&Atilde;O
                </h3>
                <div className="h6 font-weight-300">
                  <i className="ni location_pin mr-2" />
                  S&atilde;o Paulo, Brazil
                </div>
                <div className="h6 mt-4">
                  <i className="ni business_briefcase-24 mr-2" />
                  Web Developer Full Stack and Cyber Security Enthusiastic
                </div>
                <div>
                  <i className="ni education_hat mr-2" />
                  Fatec - Faculdade de tecnologia de S&atilde;o Paulo
                </div>
              </div>
              <div className="mt-5 py-5 border-top text-center">
                <Row className="justify-content-center">
                  <Col lg="9">
                    <p>
                      Desenvolvedor web full stack, adoro desenvolver novas ferramentas utilizando tecnologias atuais e 
                      praticas que trazem flexibilidade, agilidade e um maior poder para o desenvolvedor. 
                      Dentre todas as op&ccedil;&otilde;es dispon&iacute;veis no mercado, direcionei minhas energias para Node.Js, React e React Native. 
                      Pois possuem uma gama alta de conte&uacute;do e liberdade de realizar desenvolvimentos back-end, 
                      front-end e mobile apenas com uma &uacute;nica linguagem o JavaScript.
                      Dentro do mundo da seguran&ccedil;a a informa&ccedil;&atilde;o, tenho como hobbi realizar pequenos experimentos de
                      ataques voltados para o universo bug bounty e assim melhor meus conhecimentos de seguran&ccedil;a 
                      e aplicarmos em meus desenvolvimentos.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Card>
        </Container>
      </Container>
    </Fragment>
  )
}