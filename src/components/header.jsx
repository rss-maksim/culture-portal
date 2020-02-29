import PropTypes from 'prop-types'
import React from 'react'
import { AppBar, Typography, Toolbar, Box } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Link } from 'gatsby'

import LocaleSelector, { locales } from './LocaleSelector'

const Header = () => {
  const { t, i18n } = useTranslation()
  const handleChangeLanguage = lang => () => i18n.changeLanguage(lang)

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography className="header-nav">
          <Link className="nav-item" activeClassName="active" to="/">
            {t('main')}
          </Link>
          <Link className="nav-item" activeClassName="active" to="/directors">
            {t('directors')}
          </Link>
          <Link className="nav-item" activeClassName="active" to="/team">
            {t('team')}
          </Link>
          <Link className="nav-item" activeClassName="active" to="/worklog">
            {t('worklog')}
          </Link>
        </Typography>
        <Box className="header-locale-selector">
          <LocaleSelector
            locales={locales}
            onSwitch={handleChangeLanguage}
            active={i18n.language}
          />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
