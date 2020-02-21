import React from 'react'
import { Link } from 'gatsby'

const ArchitectsPage = props => (
  <Layout>
    <SEO title="Architects" />
    <h1>Architects</h1>
    <p>Welcome to Architects page</p>
    <DirectoryList {...props} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ArchitectsPage
