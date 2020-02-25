import React, { useState, useEffect } from 'react'
import { Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import DirectorCard from '../components/DirectorCard/DirectorCard'
import getQueryDataDirectors from '../directors/getQueryDataDirectors'

import SEO from '../components/seo'
import App from '../components/app'

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
const IndexPage = () => {
  // const [loadingIMG, setLoadingIMG] = useState(true)
  // const [directorData, setDirectorData] = useState(null)
  const match = useMediaQuery('(max-width: 945px)')
  const classes = useStyles()
  const query = getQueryDataDirectors()
  useEffect(() => {
    setDirectorData(query.directors[1 - 1])
  })

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
      <h1>Hi people</h1>
      <Grid container spacing={2} wrap="wrap">
        <Grid item xs={match ? 12 : 4} container justify="center">
          <DirectorCard
            directorData={directorData}
            handleDirectorChange={null}
            handleLoadImg={null}
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
          <Paper elevation={3} className={classes.root}>
            <h1>Hi people</h1>
          </Paper>
        </Grid>
      </Grid>
    </App>
  )
}

export default IndexPage
