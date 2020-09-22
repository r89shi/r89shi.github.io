import React, { Fragment } from 'react'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import ProjectsFun from './ProjectsFun'

export default function Index() {
  return (
    <Fragment>
      <Menu />

      <Home />
      <Skills />
      <Projects />
      <ProjectsFun />

      <Footer />
    </Fragment>
  )
}