import React from 'react'
import PropTypes from 'prop-types'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    height: 400,
    margin: '10px 0',
    padding: 10
  }
}))
const Map = ({ coord }) => {
  const classes = useStyles()
  return (
    <Paper elevation={3} className={classes.root}>
      Hi world {coord}
    </Paper>
  )
}

Map.propTypes = {
  coord: PropTypes.string
}

Map.defaultProps = {
  coord: 'coordinate'
}

export default Map
