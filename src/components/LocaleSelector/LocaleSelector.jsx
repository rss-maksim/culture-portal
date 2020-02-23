import PropTypes, { func, string } from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import { Link } from '@material-ui/core'

import './index.scss'

const LocaleSelector = ({ locales, active, onSwitch }) => (
  <div className="locale-selector-wrapper">
    {locales.map(({ icon: Icon, name }) => (
      <Link
        key={name}
        className={classnames('', { active: active === name })}
        title={name.toUpperCase()}
        onClick={onSwitch(name)}
      >
        <Icon alt={name} />
      </Link>
    ))}
  </div>
)

LocaleSelector.propTypes = {
  locales: PropTypes.arrayOf(
    PropTypes.shape({
      icon: func,
      name: string
    })
  ).isRequired,
  onSwitch: PropTypes.func.isRequired,
  active: string.isRequired
}

export default LocaleSelector
