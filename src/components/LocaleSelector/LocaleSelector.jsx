import PropTypes, { func, string } from "prop-types"
import React from 'react'
import { Link } from '@material-ui/core';

const LocaleSelector = ({ locales }) => {
  return locales.map(({ icon: Icon, name, url }) => (
    <Link href={url} key={name} title={name.toUpperCase()}>
      <Icon alt={name} />
    </Link>
  ))
}

LocaleSelector.propTypes = {
  locales: PropTypes.arrayOf(PropTypes.shape(
    {
      icon: func,
      name: string,
      url: string
    }
  )).isRequired
}

export default LocaleSelector
