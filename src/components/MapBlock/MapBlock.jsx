/* eslint-disable no-extra-parens */
/* eslint-disable array-bracket-spacing */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import CircularProgress from '@material-ui/core/CircularProgress'

import { LOCALES } from '../../const'
import './MapBlock.css'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: 400,
    margin: '10px 0',
    padding: 10,
    filter: 'grayscale(1)',
    '&:hover': {
      filter: 'grayscale(0)'
    }
  }
}))
const MapBlock = ({ coordinates, name, currentLang }) => {
  const classes = useStyles()
  const [loadingMap, setLoadingMap] = useState(true)
  const loadClasses = classNames({
    loadingMap,
    noLoadingMap: !loadingMap
  })
  const { en, ru, by } = LOCALES
  const localMap =
    (currentLang === ru && 'ru_RU') ||
    (currentLang === en && 'en_US') ||
    (currentLang === by && 'be-BY')
  return (
    <Paper elevation={3} className={classes.root}>
      <div className={loadClasses}>
        <CircularProgress color="primary" />
      </div>
      <YMaps query={{ lang: localMap }}>
        <Map
          defaultState={{ center: coordinates, zoom: 8 }}
          state={{ center: coordinates, zoom: 13 }}
          height="100%"
          width="100%"
          onLoad={() => setLoadingMap(false)}
        >
          <Placemark
            geometry={coordinates}
            properties={{
              iconContent: `${name}`
            }}
            options={{
              preset: 'islands#blackStretchyIcon'
            }}
          />
        </Map>
      </YMaps>
    </Paper>
  )
}

Map.propTypes = {
  coordinates: PropTypes.array,
  name: PropTypes.string
}

Map.defaultProps = {
  coordinates: [53.53, 27.34],
  name: ''
}

export default MapBlock
