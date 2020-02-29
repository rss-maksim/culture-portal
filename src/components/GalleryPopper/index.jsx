import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import ImageIcon from '@material-ui/icons/Image'

import AppPopper from './../Popper'
import Gallery from '../Gallery'

const useStyles = makeStyles(theme => ({
  ImageIcon: {
    color: 'white'
  }
}))
const GalleryPopper = ({ images }) => {
  const classes = useStyles()
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
    setOpen(prev => !prev)
  }

  return (
    <AppPopper
      buttonContent={
        <ImageIcon className={classes.ImageIcon} fontSize="large" />
      }
    >
      <Gallery images={images.map(link => ({ src: link }))} />
    </AppPopper>
  )
}

GalleryPopper.propTypes = {
  images: PropTypes.array
}

export default GalleryPopper
