import React from 'react'
import PropTypes from 'prop-types'
import AwesomeSlider from 'react-awesome-slider'
import СoreStyles from 'react-awesome-slider/src/core/styles.scss'
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss'

const Gallery = ({ images, ...rest }) => (
  <AwesomeSlider
    animation="foldOutAnimation"
    cssModule={[СoreStyles, AnimationStyles]}
    {...rest}
  >
    {images.length &&
      images.map((image, index) => <div key={index} data-src={image.src} />)}
  </AwesomeSlider>
)

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string
    }).isRequired
  )
}

export default Gallery
