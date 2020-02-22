import { LOCALES } from '../../const'
import enFlag from '../../images/flags/uk.svg'
import ruFlag from '../../images/flags/russia.svg'
import byFlag from '../../images/flags/belarus.svg'

const { en, ru, by } = LOCALES
export const locales = [
  {
    name: en,
    icon: enFlag,
    url: '/'
  },
  {
    name: ru,
    icon: ruFlag,
    url: `/${ru}`
  },
  {
    name: by,
    icon: byFlag,
    url: `/${by}`
  }
]

export { default } from './LocaleSelector'
