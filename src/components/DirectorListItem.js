import React from 'react'
import { Link } from 'gatsby'
import { ListItem, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: {
    ' & a': { width: '100%' }
  }
}))

const DirectorListItem = ({ directorData }) => {
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleListItemClick = (event, index) => {
    event.preventDefault()
    setSelectedIndex(index)
  }
  return (
    <ListItem
      button
      selected={selectedIndex === 0}
      onClick={event => handleListItemClick(event, 0)}
      className={classes.root}
    >
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