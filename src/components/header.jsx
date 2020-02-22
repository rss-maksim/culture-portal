import PropTypes from 'prop-types'
import React from 'react'
import { AppBar, Link, Typography, Toolbar, Box } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import LocaleSelector, { locales } from './LocaleSelector'

const Header = ({ siteTitle }) => {
  const { t, i18n } = useTranslation()
  const handleChangeLanguage = lang => () => i18n.changeLanguage(lang)
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography className="header-nav">
          <Link href="/" color="inherit">
            {t('main')}
          </Link>
          <Link href="/architects" color="inherit">
            {t('architects')}
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
