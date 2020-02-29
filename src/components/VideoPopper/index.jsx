import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import YouTubeIcon from '@material-ui/icons/YouTube'

import AppPopper from './../Popper'

const useStyles = makeStyles(theme => ({
  YouTubeIcon: {
    color: 'white'
  }
}))
const VideoPopper = ({ videoUrl }) => {
  const classes = useStyles()

  return (
    <AppPopper
      buttonContent={
        <YouTubeIcon className={classes.YouTubeIcon} fontSize="large" />
      }
    >
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </AppPopper>
  )
}

VideoPopper.propTypes = {
  videoUrl: PropTypes.string.isRequired
}

export default VideoPopper
