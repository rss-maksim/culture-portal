import PropTypes from "prop-types"
import React from "react"
import { AppBar, Link, Typography, Toolbar, Box } from "@material-ui/core"

import LocaleSelector from "./LocaleSelector"
import { LOCALES } from '../const'
import enFlag from "../images/flags/uk.svg";
import ruFlag from "../images/flags/russia.svg";
import byFlag from "../images/flags/belarus.svg";

const { en, ru, by } = LOCALES
const locales = [
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

const Header = ({ siteTitle }) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography className="header-nav">
        <Link href="/" color="inherit">Home</Link>
        <Link href="/architects" color="inherit">Architects</Link>
      </Typography>
      <Box className="header-locale-selector">
        <LocaleSelector locales={locales} />
      </Box>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
