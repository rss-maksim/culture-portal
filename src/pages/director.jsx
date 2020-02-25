import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { useMediaQuery } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DirectorCard from '../components/DirectorCard/DirectorCard'
import TableOfWorks from '../components/TableOfWorks/TableOfWorks'
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
  // const [idOfDirector, setIdOfDirector] = useState(1)
  // const [loadingIMG, setLoadingIMG] = useState(true)
  // const [directorData, setDirectorData] = useState(null)
  const match = useMediaQuery('(max-width: 945px)')
  const classes = useStyles()
  const query = getQueryDataDirectors()
  useEffect(() => {
    setDirectorData(query.directors[idOfDirector - 1])
  })
  const handleDirectorChange = (next = true) => {
    setLoadingIMG(true)
    const length = query.directors.length
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
        </Grid>
      </Grid>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default DirectorPage
