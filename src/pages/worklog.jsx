import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { useTranslation } from 'react-i18next'
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
