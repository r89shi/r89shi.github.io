import React, { Component } from 'react'
import './styles.css'

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <p>Resume</p>

                <ul>
                    <li><a target="_blank" href="https://www.linkedin.com/in/rluccaf/?locale=en_US">Linkedin</a></li>
                    <li><a target="_blank" href="https://www.instagram.com/roberto.shimokawa/">Instagram</a></li>
                    <li><a target="_blank" href="https://github.com/rluccaf">GitHub</a></li>
                </ul>
            </div>
        )
    }
}