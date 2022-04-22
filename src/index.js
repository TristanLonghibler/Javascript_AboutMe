import React from 'react'
import ReactDOM from 'react-dom'
import Hobbies from './containers/Hobbies'
import AboutMe from './containers/AboutMe'
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

const AppContainer = () => {
  return (
    <BrowserRouter>
      <NavBar style={{marginBottom: '10px' }} />
      <Route component={AboutMe} exact path='/' />
      <Route component={Hobbies} path='/Hobbies' />
    </BrowserRouter>
  )
}


ReactDOM.render(<AppContainer />, document.querySelector('#root'))

