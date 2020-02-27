/* eslint-disable array-bracket-spacing */
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
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
    textAlign: 'justify',
    textIndent: 40,
    margin: 10,
    padding: 10,
    '& > * + *': {
      marginTop: theme.spacing(2)
    },
    '& h1': {
      textAlign: 'center',
      marginBottom: 50
    }
  }
}))
const IndexPage = () => {
  const [loadingIMG, setLoadingIMG] = useState(true)
  const [directorData, setDirectorData] = useState(null)
  const { t } = useTranslation()
  const match = useMediaQuery('(max-width: 945px)')
  const classes = useStyles()
  const query = getQueryDataDirectors()
  const randomIndex = Math.round(Math.random() * (query.directors.length - 1))
  useEffect(() => {
    setDirectorData(query.directors[randomIndex])
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
      <Grid container spacing={2} wrap="wrap">
        <Grid
          item
          xs={match ? 12 : 4}
          container
          justify="center"
          className="main"
        >
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
            <h1>{t('mainPage.header')}</h1>
            <div>
              <p>{t('mainPage.text1')} </p>
              <p>{t('mainPage.text2')} </p>
              <p>{t('mainPage.text3')} </p>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </App>
  )
}

export default IndexPage
