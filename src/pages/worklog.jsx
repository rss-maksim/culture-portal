import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Worklog from '../components/Worklog'
import App from '../components/app'

const WorklogPage = () => (
  <App>
    <SEO title="Worklog" />
    <Worklog />
  </App>
)

export default WorklogPage
