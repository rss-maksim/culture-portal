/* eslint-disable array-bracket-spacing */
import { useMediaQuery } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, Link, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import DirectorCard from '../components/DirectorCard/DirectorCard'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TableOfWorks from '../components/TableOfWorks/TableOfWorks'
import MapBlock from '../components/MapBlock/MapBlock'
import { useTranslation } from 'react-i18next'
import './director.css'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))
const DirectorPage = () => {
  const [idOfDirector, setIdOfDirector] = useState(1)
  const [loadingIMG, setLoadingIMG] = useState(true)
  const [directorData, setDirectorData] = useState(null)
  const match = useMediaQuery('(max-width: 945px)')
  const classes = useStyles()
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
            coordinates
            works {
              date
              name
            }
          }
        }
      }
    }
  `)
  useEffect(() => {
    setDirectorData(query.allDirectorsJson.nodes[0].directors[idOfDirector - 1])
  })
  const { i18n } = useTranslation()
  const handleDirectorChange = (next = true) => {
    setLoadingIMG(true)
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
  const handleLoadImg = () => setLoadingIMG(false)

  if (!directorData) {
    return (
      <div className={classes.root}>
        <CircularProgress color="inherit" />
      </div>
    )
  }

  return (
    <Layout>
      <SEO title="Film director" />

      <Grid container spacing={2} wrap="wrap">
        <Grid item xs={match ? 12 : 4} container justify="center">
          <DirectorCard
            directorData={directorData}
            handleDirectorChange={handleDirectorChange}
            handleLoadImg={handleLoadImg}
            loading={loadingIMG}
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
          <MapBlock
            coordinates={directorData.coordinates.split(',').map(item => +item)}
            name={`${directorData.first_name} ${directorData.last_name}`}
            currentLang={i18n.language}
          />
        </Grid>
      </Grid>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default DirectorPage
