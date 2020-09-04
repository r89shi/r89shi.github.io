import React from 'react'
import { FaNodeJs, FaJsSquare, FaReact, FaHtml5, FaCss3, FaGithub, FaBug} from 'react-icons/fa'

import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

import './styles.css'
import myphoto from '../../assets/images/myphoto.png'
import bethehero from '../../assets/images/bethehero.png'
import huelma from '../../assets/images/huelma.png'
import thankaparamedic from '../../assets/images/thankaparamedic.png'
import obra24horas from '../../assets/images/obra24horas.png'
import eficaz from '../../assets/images/eficaz.png'

export default function Home() {
    return (
        <div className="container">
            <Menu />
            
            <div className="personal-info">
                <div className="personal-text">
                    <h1>Roberto Falc&atilde;o</h1>
                    <p className="personal-interests">Web Developer Full Stack and Cyber Security Enthusiastic</p>

                    <p className="personal-description">
                        Desenvolvedor web full stack, adoro desenvolver novas ferramentas utilizando tecnologias atuais e 
                        praticas que trazem flexibilidade, agilidade e um maior poder para o desenvolvedor. 
                        Dentre todas as op&ccedil;&otilde;es dispon&iacute;veis no mercado, direcionei minhas energias para Node.Js, React e React Native. 
                        Pois possuem uma gama alta de conte&uacute;do e liberdade de realizar desenvolvimentos back-end, 
                        front-end e mobile apenas com uma &uacute;nica linguagem o JavaScript.
                        Dentro do mundo da seguran&ccedil;a a informa&ccedil;&atilde;o, tenho como hobbi realizar pequenos experimentos de
                        ataques voltados para o universo bug bounty e assim melhor meus conhecimentos de seguran&ccedil;a 
                        e aplicarmos em meus desenvolvimentos.
                    </p>
                </div>

                <div className="personal-photo">
                    <img src={myphoto} alt="my personal photo"/>
                </div>
            </div>

            <div className="skills">
                <h2>Skills</h2>
                <p>Linguagens e Tecnologias.</p>

                <ul>
                    <li><FaJsSquare size={42}/><br />Javascript</li>
                    <li><FaNodeJs size={42}/><br />Node.js</li>
                    <li><FaReact size={42}/><br />React</li>
                    <li><FaReact size={42}/><br />React Native</li>
                    <li><FaHtml5 size={42}/><br />HTML</li>
                    <li><FaCss3 size={42}/><br />CSS</li>
                    <li><FaGithub size={42}/><br />GitHub</li>
                    <li><FaBug size={42}/><br />Bug Bounty</li>
                    <li><span>SAP</span><br />ABAP</li>
                </ul>
            </div>

            <div className="projects">
                <h2>Projects</h2>

                <div className="project-list">

                    <div className="project-item">
                        <img src={huelma} alt=""/>
                        <p><strong>Backend:</strong> PHP</p>
                        <p><strong>Frontend:</strong> HTML, Javascript, CSS, BootStrap.</p>
                        <br/>
                        <p>
                            Projeto do portal da emprea Huelma que presta servi&ccedil;os Florestais.
                        </p>
                        <br/>
                        <a href="http://huelma.com.br/" target="_blank">Acesse: huelma.com.br</a>
                    </div>

                    <div className="project-item">
                        <img src={thankaparamedic} alt=""/>
                        <p><strong>Backend:</strong> PHP</p>
                        <br/>
                        <p>
                            Projeto para agradecer aos param&eacute;dicos da prov&iacute;ncia de Alberta pelo trabalho.
                        </p>
                        <br/>
                        <a href="https://www.thankaparamedic.com/" target="_blank">Acesse: www.thankaparamedic.com</a>
                    </div>

                    <div className="project-item">
                        <img src={obra24horas} alt=""/>
                        <p><strong>Backend:</strong> Cold Fusion</p>
                        <p><strong>Frontend:</strong> HTML, Javascript, CSS, BootStrap.</p>
                        <br/>
                        <p>
                            Projeto de reformula&ccedil;&atilde;o do portal da empresa obra24horas.
                        </p>
                        <br/>
                        <a href="https://www.obra24horas.com.br/" target="_blank">Acesse: www.obra24horas.com.br</a>
                    </div>

                    <div className="project-item">
                        <img src={eficaz} alt=""/>
                        <p><strong>Backend:</strong> PHP</p>
                        <p><strong>Frontend:</strong> HTML, Javascript, CSS, BootStrap.</p>
                        <br/>
                        <p>
                            Portal para monitoramento de corrente el&eacute;trica dos equipamentos.
                        </p>
                        <br/>
                    </div>

                </div>
            </div>

            <div className="projects">
                <h2>Projects for fun...</h2>

                <div className="project-list">

                    <div className="project-item">
                        <img src={bethehero} alt=""/>
                        <p><strong>Backend:</strong> Node.js</p>
                        <p><strong>Frontend:</strong> React</p>
                        <p><strong>Mobile:</strong> React Native</p>
                        <br/>
                        <p>Be The Hero desenvolvido durante a semana Omnistack da RocketSeat, trata-se 
                            de um site de ajuda para ongs que realizam o resgate de animais.
                            Teve como finalidade praticar as tr&ecirc;s frentes de desenvolvimento.
                        </p>
                        <br/>
                        <a href="https://github.com/rluccaf/bethehero" target="_blank">GitHub: bethehero</a>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}