import React from 'react'
import styles from '../styles.module.css'
const Search = ({ searchText, searchValue, filterVirtualData }) => {
  const handleSearch = (e) => {
    filterVirtualData(e.target.value)
  }
  return (
    <div className={'rps-search-div ' + styles['rps-search-div']}>
      <span>{searchText}</span>
      <input
        className={'rps-search-input ' + styles['rps-search-input']}
        type='text'
        onChange={handleSearch}
        value={searchValue}
      />
    </div>
  )
}
export default Search
