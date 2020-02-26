/* eslint-disable array-bracket-spacing */
import React, { useState, useEffect } from 'react'
import { Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import DirectorCard from '../components/DirectorCard/DirectorCard'
import getQueryDataDirectors from '../directors/getQueryDataDirectors'
import { useTranslation } from 'react-i18next'

import SEO from '../components/seo'
import App from '../components/app'

import './director.css'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    textAlign: 'center',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))
const IndexPage = () => {
  const [loadingIMG, setLoadingIMG] = useState(true)
  const [directorData, setDirectorData] = useState(null)
  const { t, i18n } = useTranslation()
  const match = useMediaQuery('(max-width: 945px)')
  const classes = useStyles()
  const query = getQueryDataDirectors()
  useEffect(() => {
    setDirectorData(query.directors[2 - 1])
  })

  const handleLoadImg = () => setLoadingIMG(false)

  if (!directorData) {
    return (
      <div className={classes.root}>
        <CircularProgress color="inherit" />
      </div>
    )
  }

  return (
    <App>
      <SEO title="Cultural portal" />
      <h1>Белорусские режиссеры в кино</h1>
      <div></div>
      <Grid container spacing={2} wrap="wrap">
        <Grid item xs={match ? 12 : 4} container justify="center">
          <DirectorCard
            directorData={directorData}
            handleLoadImg={handleLoadImg}
            loading={loadingIMG}
            isMain={true}
          />
        </Grid>
        <Grid
          item
          xs={match ? 12 : 8}
          container
          justify="center"
          className="director-info"
        >
          <Paper elevation={3} className={classes.root}>
            <h1>Hi people</h1>
          </Paper>
        </Grid>
      </Grid>
    </App>
  )
}

export default IndexPage
