import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions';

import { LOCALES } from '../../const'
import LocaleSelector, { locales } from './'

export const SimpleSelector = () => (
  <LocaleSelector
    locales={locales}
    active={select('Active locale', LOCALES, LOCALES.en)}
    onSwitch={() => action('item-click')}
  />
)

export default {
  title: 'LocaleSelector',
  decorators: [withKnobs]
}
