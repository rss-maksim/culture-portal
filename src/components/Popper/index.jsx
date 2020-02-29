import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Modal, Backdrop, Fade } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(8),
    minWidth: '50%',
    '&:focus': {
      outline: 'none'
    }
  }
}))
const AppPopper = ({ buttonContent, children }) => {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()
  const handleClick = event => {
    setOpen(prev => !prev)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>{children}</div>
        </Fade>
      </Modal>
      <Button onClick={handleClick}>{buttonContent}</Button>
    </div>
  )
}

export default AppPopper
