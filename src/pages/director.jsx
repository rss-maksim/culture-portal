/* eslint-disable array-bracket-spacing */
import React, { useState, useEffect } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { useMediaQuery } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import DirectorCard from '../components/DirectorCard/DirectorCard'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TableOfWorks from '../components/TableOfWorks/TableOfWorks'
import MapBlock from '../components/MapBlock/MapBlock'
import getQueryDataDirectors from '../directors/getQueryDataDirectors'

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
  const query = getQueryDataDirectors()

  useEffect(() => {
    setDirectorData(query.directors[idOfDirector - 1])
  })

  const { i18n } = useTranslation()

  const handleDirectorChange = (next = true) => {
    setLoadingIMG(true)
    const { length } = query.directors
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
            isMain={false}
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
