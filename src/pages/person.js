import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'

import DirectorPage from '../components/DirectorPage/DirectorPage'
const PersonPage = props => (
  <Layout>
    <Router>
      <DirectorPage path={props.location.pathname} />
    </Router>
  </Layout>
)

export default PersonPage
