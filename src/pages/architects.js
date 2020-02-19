import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import App from '../components/app'

const ArchitectsPage = () => (
  <App>
    <SEO title="Architects" />
    <h1>Architects</h1>
    <p>Welcome to Architects page</p>
    <Link to="/">Go back to the homepage</Link>
  </App>
)

export default ArchitectsPage
