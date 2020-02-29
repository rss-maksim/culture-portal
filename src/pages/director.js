import React from 'react'
import { Router } from '@reach/router'
import App from './../components/app'
import DirectorPage from '../components/DirectorPage/DirectorPage'

const director = props => (
  <App>
    <Router>
      <DirectorPage path={props.location.pathname} />
    </Router>
  </App>
)

export default director
