import React, { useState } from 'react'
import { Input } from '@material-ui/core'

const inputStyle = {
  color: '#000',
  border: '1px solid #000',
  width: '100%',
  boxShadow: 'none'
}
const SearchBar = ({ sortFunc }) => {
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
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
        style={inputStyle}
      />

      {/* <SearchBar
        value={this.state.value}
        onChange={newValue => this.setState({ value: newValue })}
        onRequestSearch={() => doSomethingWith(this.state.value)}
      /> */}
    </>
  )
}

export default SearchBar
