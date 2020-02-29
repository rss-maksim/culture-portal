import React from 'react'
import Gallery from './'
import * as directors from '../../directors/directors.json'
import { withKnobs, boolean, select, number } from '@storybook/addon-knobs'

const images = directors.directors[1].gallery
const imagesOptions = images.reduce(
  (acc, currValue, index) => ({ ...acc, [currValue]: index }),
  {}
)

export const SimpleGallery = () => (
  <Gallery
    infinite={boolean('infinite', false)}
    fillParent={boolean('fillParent', false)}
    bullets={boolean('bullets', true)}
    organicArrows={boolean('organicArrows', true)}
    selected={select('Active image', imagesOptions, 0)}
    transitionDelay={number('Delay', 0)}
    images={images.map(link => ({ src: link }))}
  />
)

export default {
  title: 'SimpleGallery',
  decorators: [withKnobs]
}
