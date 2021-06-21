# react-pageable-select

pageable select compnent for react

# live demo

https://react-pageable-select.netlify.app/

## Install

```bash
npm install  react-pageable-select
```

## Usage

```jsx
import React, { Component } from 'react'
import ReactPageableSelect from 'react-pageable-select'
import 'react-pageable-select/dist/index.css'

class Example extends Component {
  render() {
    return (
      <ReactPageableSelect
        data={data} // data for select
        // props for html select element
        selectProps={{
          multiple: true,
          onChange: (e) => alert('selected value: ' + e.target.value)
        }}
        searchPattern={(d) => d.name + ' ' + d.id} // the worlds you write in search box will be searched in search pattern
        option={(
          singleData,
          index // option value for select takes single data and index
        ) => (
          <option key={index}>
            {singleData.name} - {singleData.phone}
          </option>
        )}
      />
    )
  }
}
```

# styling

you can overrite these class for changing style (you can be contribute for styling)

```

.rps-pagination
.rps-pagination-button
.rps-search-div
.rps-search-input
.rps-select
```

# props

|     Property     |   Type   |   Default    |                                description                                |
| :--------------: | :------: | :----------: | :-----------------------------------------------------------------------: |
|       data       |  array   |      []      |                         data for select element.                          |
|   selectProps    |  object  |      {}      |                    properties for html select element                     |
|  searchPattern   | function |    ()=>{}    |      Returns a string value. Searching is done in this string value.      |
|  caseSensitive   |   bool   |    false     |                      controls search case sensitive                       |
|     pageSize     | integer  |      5       |                          page size for options.                           |
| pageSizeOptions  |  array   | [5,10,15,20] |                       options to change page size.                        |
|   onPageChange   | function |    ()=>{}    |                   function triggered after page change                    |
| onPageSizeChange | function |    ()=>{}    |                 function triggered after page size change                 |
|   previousText   |  string  |     "<"      |                     value inside the previous button                      |
|     nextText     |  string  |     ">"      |                       value inside the next button                        |
|      ofText      |  string  |     "of"     |                             value for of text                             |
|     pageText     |  string  |    "Page"    |                            value for page text                            |
|    searchText    |  string  |   "Search"   |                           value for search text                           |
|     rowsText     |  string  |    "rows"    |                            value for rows text                            |
|      option      | function | must be set  | function which return option for every data (see documentation for usage) |
|  showPagination  |   bool   |     true     |                        shows pagination component                         |
|    showSearch    |   bool   |     true     |                          shows search component                           |

## License

MIT © [hasankzl](https://github.com/hasankzl)

```

```
