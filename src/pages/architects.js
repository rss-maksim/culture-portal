import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArchitectsPage = () => (
  <Layout>
    <SEO title="Architects" />
    <h1>Architects</h1>
    <p>Welcome to Architects page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ArchitectsPage
