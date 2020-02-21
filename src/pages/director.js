import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Paper from '@material-ui/core/Paper';
import { useMediaQuery } from '@material-ui/core';
import Layout from "../components/layout"
import SEO from "../components/seo"
import DirectorCard from "../components/DirectorCard/DirectorCard"
import TableOfWorks from "../components/TableOfWorks/TableOfWorks"
import "./director.css"

const DirectorPage = () => {
  const match = useMediaQuery('(max-width: 900px)')
  return (
    <Layout>
    <SEO title="Film director" />
    
    <Grid container spacing={2} wrap="wrap" className="director-card">
      <Grid item xs={match ? 12 : 4} container justify="center">
     
        <DirectorCard />
      </Grid>
      <Grid item xs={match ? 12 : 8} container justify="center" className="director-info">
        <TableOfWorks />
        <TableOfWorks />
      </Grid>
    </Grid>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  );
}
  


export default DirectorPage
