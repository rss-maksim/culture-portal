import React, { useState } from 'react'
import { Input } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    color: '#000000',
    padding: '2px',
    border: '1px solid gray',
    margin: '10px 0'
  }
}))
const SearchBar = ({ sortFunc }) => {
  const classes = useStyles()
  // eslint-disable-next-line array-bracket-spacing
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    sortFunc(e.target.value)
  }
  return (
    <>
      <Input
        className={classes.root}
        label="Search Director"
        type="search"
        onChange={e => {
          handleSubmit(e)
        }}
      />
    </>
  )
}

export default SearchBar
