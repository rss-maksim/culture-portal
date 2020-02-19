import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DirectorPage = () => (
  <Layout>
    <SEO title="Film director" />
    <h1>Film director page</h1>
    <p></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DirectorPage;
