import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Popper from '@material-ui/core/Popper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    width: 500
  },
  typography: {
    padding: theme.spacing(2)
  }
}))
const AppPopper = ({ buttonContent, children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
    setOpen(prev => !prev)
  }

  return (
    <div>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.root}>
              <Typography className={classes.typography}>{children}</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Button onClick={handleClick}>{buttonContent}</Button>
    </div>
  )
}

export default AppPopper
