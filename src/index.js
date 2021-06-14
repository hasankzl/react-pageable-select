import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import Pagination from './components/Pagination'
import Search from './components/Search'
const ReactPagableSelect = ({
  showPagination,
  showSearch,
  data,
  selectProps,
  searchPattern,
  caseSensitive,
  pageSize,
  pageSizeOptions,
  onPageChange,
  onPageSizeChange,
  previousText,
  option,
  nextText,
  rowsText,
  pageText,
  ofText,
  searchText
}) => {
  const [virtualData, setVirtualData] = useState([...data])
  const [copyData, setCopyData] = useState([...data])
  const [page, setPage] = useState(1)
  const [dataSize, setDataSize] = useState(pageSize)
  const [searchValue, setSearchValue] = useState('')

  // maybe this is not the correct way to check if data is changed
  // but I couldn't find any other way and some how useEffect didn't work
  if (copyData !== data) {
    setCopyData(data)
    setVirtualData(data)
  }
  useEffect(() => {
    setPage(1)
    setSearchValue('')
  }, [data])

  const handlePageSizeChange = (size) => {
    setDataSize(size)
    setPage(1)
    onPageSizeChange(size)
  }
  const handlePageChange = (page) => {
    if (page !== 0 && page <= maxPageSize) {
      setPage(page)
      onPageChange(page)
    }
  }

  const filterVirtualData = (search) => {
    setSearchValue(search)
    const isOk = (d) => {
      let isFit = false
      isFit = caseSensitive
        ? searchPattern(d).toString().includes(search)
        : searchPattern(d).toString().toLowerCase().includes(search)
      return isFit
    }
    const filteredData = data.filter((d) => isOk(d))
    setPage(1)
    setVirtualData(filteredData)
  }

  const dataCount = data.length
  const virtualDataCount = virtualData.length
  const maxPageSize = Math.ceil(virtualDataCount / dataSize)
  return (
    <React.Fragment>
      <select {...selectProps} className={styles['rps-select']}>
        {virtualData
          .slice(dataSize * (page - 1), dataSize * page)
          .map((singleData, index) => {
            return option(singleData, index)
          })}
      </select>
      {showSearch && (
        <Search
          filterVirtualData={filterVirtualData}
          searchText={searchText}
          searchValue={searchValue}
        />
      )}
      {showPagination && (
        <Pagination
          handlePageChange={handlePageChange}
          page={page}
          maxPageSize={maxPageSize}
          dataCount={dataCount}
          handlePageSizeChange={handlePageSizeChange}
          pageSizeOptions={pageSizeOptions}
          filteredDataCount={virtualData.length}
          rowsText={rowsText}
          pageText={pageText}
          previousText={previousText}
          nextText={nextText}
          ofText={ofText}
          pageSize={pageSize}
        />
      )}
    </React.Fragment>
  )
}

ReactPagableSelect.defaultProps = {
  data: [],
  selectProps: {},
  searchPattern: () => {},
  pageSize: 10,
  pageSizeOptions: [5, 10, 15, 20],
  previousText: '<',
  nextText: '>',
  rowsText: 'rows',
  pageText: 'Page',
  ofText: 'of',
  searchText: 'Search',
  searchKeys: [],
  onPageChange: () => {},
  onSortedChange: () => {},
  onPageSizeChange: () => {},
  caseSensitive: false,
  showPagination: true,
  showSearch: true,
  option: (singleData, index) => <option>please set option props</option>
}

ReactPagableSelect.propTypes = {
  data: PropTypes.array,
  searchPattern: PropTypes.func,
  selectProps: PropTypes.object,
  pageSize: PropTypes.number,
  pageSizeOptions: PropTypes.array,
  onPageChange: PropTypes.func,
  onPageSizeChange: PropTypes.func,
  previousText: PropTypes.string,
  nextText: PropTypes.string,
  rowsText: PropTypes.string,
  pageText: PropTypes.string,
  ofText: PropTypes.string,
  searchText: PropTypes.string,
  option: PropTypes.func,
  showPagination: PropTypes.bool,
  showSearch: PropTypes.bool
}

export default ReactPagableSelect
