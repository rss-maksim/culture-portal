import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import DirectorCard from '../components/DirectorCard/DirectorCard';

const DirectorPage = () => (
  <Layout>
    <SEO title="Film director" />
      <DirectorCard />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DirectorPage;
