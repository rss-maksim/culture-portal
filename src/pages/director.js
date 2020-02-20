import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import DirectorCard from '../components/DirectorCard/DirectorCard';
import './director.css';

const DirectorPage = () => (
  <Layout>
    <SEO title="Film director" />
    <div className='container'>
    <div className='director-card'>
    <DirectorCard  />
    </div>

    <div className="director-info"> ipsum  </div>
    </div>
    
      
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DirectorPage;
