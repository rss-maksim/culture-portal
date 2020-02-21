import React from "react";
import { Link } from "gatsby";
import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout";
import SEO from "../components/seo";
import DirectorCard from '../components/DirectorCard/DirectorCard';
import TableOfWorks from '../components/TableOfWorks/TableOfWorks';
import './director.css';

const DirectorPage = () => (
  <Layout>
    <SEO title="Film director" />
    {/* <div className='container'>
    <div className='director-card'>
    <DirectorCard  />
    </div>

    <div className="director-info"> ipsum  </div>
    </div> */}
     <Grid container spacing={2} wrap="wrap">
    <Grid item xs={'auto'} container justify="center">
      <DirectorCard  />
    </Grid>
    <Grid item xs={8} container justify="center"  className='director-info'>
     
      <TableOfWorks/>
    </Grid>
    </Grid>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DirectorPage;
