import React from 'react'
import styles from '../styles.module.css'
const Pagination = ({
  handlePageChange,
  page,
  maxPageSize,
  pageSizeOptions,
  pageSize,
  handlePageSizeChange,
  previousText,
  nextText,
  rowsText,
  pageText,
  ofText
}) => {
  return (
    <div className={'rps-pagination ' + styles['rps-pagination']}>
      <button
        className={'rps-pagination-button ' + styles['rps-pagination-button']}
        onClick={() => handlePageChange(page - 1)}
      >
        {previousText}
      </button>

      <div>
        <label className={'rps-page-text ' + styles['rps-page-text']}>
          {pageText}
        </label>
        <input
          type='number'
          value={page}
          onChange={(e) => handlePageChange(Number(e.target.value))}
          max={maxPageSize}
          min={1}
        />
        <label className={'rps-page-text ' + styles['rps-page-text']}>
          {ofText} {maxPageSize}
        </label>
      </div>

      <div>
        <select
          onChange={(e) => handlePageSizeChange(Number(e.target.value))}
          defaultValue={pageSize}
        >
          {pageSizeOptions.map((pso) => (
            <option key={pso} value={pso}>
              {rowsText} {pso}
            </option>
          ))}
        </select>
      </div>
      <button
        className={'rps-pagination-button ' + styles['rps-pagination-button']}
        onClick={() => handlePageChange(page + 1)}
      >
        {nextText}
      </button>
    </div>
  )
}

export default Pagination
