/* eslint-disable object-curly-spacing */
/* eslint-disable array-bracket-spacing */
import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { useMediaQuery } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import DirectorCard from '../DirectorCard/DirectorCard'
import TableOfWorks from '../TableOfWorks/TableOfWorks'
import MapBlock from '../MapBlock/MapBlock'
import getQueryDataDirectors from '../../directors/getQueryDataDirectors'

import './DirectorPage.css'
import { extractId } from '../../utils/'
import Timeline from '../Timeline'

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
const DirectorPage = ({ location: { pathname } }) => {
  const id = +extractId(pathname)
  const [loadingIMG, setLoadingIMG] = useState(true)
  const [directorData, setDirectorData] = useState(null)
  const match = useMediaQuery('(max-width: 945px)')
  const classes = useStyles()
  const query = getQueryDataDirectors()

  useEffect(() => {
    setDirectorData(query.directors[id - 1])
  })

  const { i18n } = useTranslation()
  const handleDirectorChange = (next = true) => {
    const { length } = query.directors
    if (next) {
      return length < id + 1 ? 1 : id + 1
    }
    return id - 1 === 0 ? length : id - 1
  }
  const handleLoadImg = loading => {
    loading ? setLoadingIMG(true) : setLoadingIMG(false)
  }

  if (!directorData) {
    return (
      <div className={classes.root}>
        <CircularProgress color="inherit" />
      </div>
    )
  }

  return (
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
        <Timeline biography={directorData.biography}></Timeline>
        <MapBlock
          coordinates={directorData.coordinates.split(',').map(item => +item)}
          name={`${directorData.first_name} ${directorData.last_name}`}
          currentLang={i18n.language.split('-')[0]}
        />
      </Grid>
    </Grid>
  )
}

export default DirectorPage
