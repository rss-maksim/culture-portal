import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Worklog from '../components/Worklog'

const WorklogPage = () => (
  <>
    <Layout>
      <SEO title="Worklog" />
      <Worklog />
    </Layout>
  </>
)

export default WorklogPage
