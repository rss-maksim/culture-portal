import PropTypes, { func, string } from 'prop-types'
import React from 'react'
import { Link } from '@material-ui/core'

const LocaleSelector = ({ locales, onSwitch }) =>
  locales.map(({ icon: Icon, name, url }) => (
    <Link key={name} title={name.toUpperCase()} onClick={onSwitch(name)}>
      <Icon alt={name} />
    </Link>
  ))

LocaleSelector.propTypes = {
  locales: PropTypes.arrayOf(
    PropTypes.shape({
      icon: func,
      name: string
    })
  ).isRequired,
  onSwitch: PropTypes.func.isRequired
}

export default LocaleSelector
