import React, { useState } from 'react'
import { Input } from '@material-ui/core'

const SearchBar = ({ sortFunc }) => {
  // eslint-disable-next-line array-bracket-spacing
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    sortFunc(e.target.value)
  }
  return (
    <>
      <Input
        className="input-search"
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
