import React, { useState, Suspense } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { useMediaQuery } from '@material-ui/core'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DirectorCard from '../components/DirectorCard/DirectorCard'
import TableOfWorks from '../components/TableOfWorks/TableOfWorks'

import './director.css'

const DirectorPage = () => {
  const [idOfDirector, setIdOfDirector] = useState(1)
  const [loading, setLoading] = useState(true)
  const match = useMediaQuery('(max-width: 945px)')
  const query = useStaticQuery(graphql`
    query MyQuery {
      allDirectorsJson(filter: { directors: {} }, skip: 1) {
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
  `)
  const directorData =
    query.allDirectorsJson.nodes[0].directors[idOfDirector - 1]
  const handleDirectorChange = (next = true) => {
    setLoading(true)
    const length = query.allDirectorsJson.nodes[0].directors.length
    if (next) {
      length < idOfDirector + 1
        ? setIdOfDirector(1)
        : setIdOfDirector(idOfDirector + 1)
    } else {
      idOfDirector - 1 === 0
        ? setIdOfDirector(length)
        : setIdOfDirector(idOfDirector - 1)
    }
  }
  const handleLoadImg = () => {
    setLoading(false)
  }

  return (
    <Layout>
      <SEO title="Film director" />

      <Grid container spacing={2} wrap="wrap" className="director-card">
        <Grid item xs={match ? 12 : 4} container justify="center">
          <DirectorCard
            directorData={directorData}
            handleDirectorChange={handleDirectorChange}
            handleLoadImg={handleLoadImg}
            loading={loading}
          />
        </Grid>
        <Grid
          item
          xs={match ? 12 : 8}
          container
          justify="center"
          className="director-info"
        >
          <TableOfWorks work={directorData.works} />
        </Grid>
      </Grid>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default DirectorPage
