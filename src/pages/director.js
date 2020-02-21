import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Grid from "@material-ui/core/Grid"
import { useMediaQuery } from '@material-ui/core';
import Layout from "../components/layout"
import SEO from "../components/seo"
import DirectorCard from "../components/DirectorCard/DirectorCard"
import TableOfWorks from "../components/TableOfWorks/TableOfWorks"
import "./director.css"

const idOfDirector = 1;

const DirectorPage = () => {
  const match = useMediaQuery('(max-width: 945px)');
  const query = useStaticQuery( graphql`
query MyQuery {
  allDirectorsJson(filter: {directors: {}}, skip: 1) {
    
      nodes {
        directors {
          id
          last_name
          first_name
          picture
          death
          birthday
          works {
            date
            name
          }
        }
      }
    
  }
}
`);
  console.log()
  const directorData = query.allDirectorsJson.nodes[0].directors[idOfDirector-1];

  return (
    <Layout>
    <SEO title="Film director" />
    
    <Grid container spacing={2} wrap="wrap" className="director-card">
      <Grid item xs={match ? 12 : 4} container justify="center">
     
        <DirectorCard directorData={directorData}/>
      </Grid>
      <Grid item xs={match ? 12 : 8} container justify="center" className="director-info">
        <TableOfWorks work={directorData.works}/>
        
      </Grid>
    </Grid>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  );
}
  


export default DirectorPage
