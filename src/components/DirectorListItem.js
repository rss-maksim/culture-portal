/* eslint-disable array-bracket-spacing */
import React from 'react'
import { Link } from 'gatsby'
import { ListItem, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0',

    ' & a': { width: '100%', color: '#fff', padding: 6 }
  }
}))
const DirectorListItem = ({ directorData }) => {
  const classes = useStyles()

  return (
    <ListItem button className={classes.root}>
      <Link to={`director/${directorData.id}`}>
        <Box m={0.5} width="100%">
          {directorData.first_name} {directorData.last_name}
        </Box>
      </Link>
    </ListItem>
  )
}
DirectorListItem.propTypes = {
  directorData: PropTypes.instanceOf(Object).isRequired
}
DirectorListItem.defaultProps = {
  directorData: {
    id: null,
    first_name: '',
    last_name: ''
  }
}
export default DirectorListItem
