import React, { Fragment } from 'react'

import './styles.css'
import myphoto from '../../assets/images/myphoto.png'


import {
  Container,
  Col,
  Row
} from 'reactstrap'

export default function Home() {
  return (
    <Fragment>
      <Container className="container-home">
        <Row>
          <Col md="8">
            <h1>ROBERTO FALC&Atilde;O</h1>
            <p className="home-description">Web Developer Full Stack and Cyber Security Enthusiastic</p>

            <p className="home-description">
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

          <Col md="4" className="text-center">
            <img className="rounded-circle img-home" src={myphoto} alt=""/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}