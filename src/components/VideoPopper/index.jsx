import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Popper from '@material-ui/core/Popper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import YouTubeIcon from '@material-ui/icons/YouTube'

const useStyles = makeStyles(theme => ({
  root: {
    width: 500
  },
  typography: {
    padding: theme.spacing(2)
  },
  YouTubeIcon: {
    color: 'black'
  }
}))
const VideoPopper = ({ videoUrl }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
    setOpen(prev => !prev)
  }

  return (
    <div className={classes.root}>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography className={classes.typography}>
                <iframe
                  width="560"
                  height="315"
                  src={videoUrl}
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Button onClick={handleClick}>
        <YouTubeIcon className={classes.YouTubeIcon} fontSize="large" />
      </Button>
    </div>
  )
}

VideoPopper.propTypes = {
  videoUrl: PropTypes.string.isRequired
}

export default VideoPopper
