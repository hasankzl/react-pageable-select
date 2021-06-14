import React, { useState } from 'react'

import ReactPagableSelect from 'react-pageble-select'
import 'react-pageble-select/dist/index.css'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import data from './jsonUserData'
const App = () => {
  const [caseSensitive, setCaseSensitive] = useState(false)
  return (
    <div style={{ margin: '30px' }}>
      <h2 style={{ textAlign: 'center' }}>react-pagable-select</h2>

      <div style={{ display: 'flex' }}>
        <div style={{ margin: '30px' }}>
          <label>Handle search case sensivite</label>
          <select
            onChange={(e) => setCaseSensitive(e.target.value === 'true')}
            style={{ marginLeft: '10px', padding: '5px' }}
            value={caseSensitive}
          >
            <option value={false}>Close</option>
            <option value={true}>Open</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'space-between',
          justifyItems: 'center'
        }}
      >
        <div>
          <h3> example with multi select </h3>
          <CodeMirror
            autoCursor={false}
            value={`  <ReactPagableSelect
          data={data}
          selectProps={{
            multiple: true,
            onChange: (e) => alert('selected value: ' + e.target.value)
          }}
          caseSensitive={caseSensitive}
          searchPattern={(d) => d.name + ' ' + d.id}
          option={(d, index) => (
            <option key={index}>
              {d.name} - {d.phone}
            </option>
          )}
          onPageChange={() => alert('page changed')}
        />`}
            options={{
              mode: 'xml',
              theme: 'material',
              lineNumbers: true
            }}
            onChange={(editor, data, value) => {}}
          />
          <div style={{ width: 500, height: 200, marginTop: 30 }}>
            <ReactPagableSelect
              data={data}
              selectProps={{
                multiple: true,
                onChange: (e) => alert('selected value: ' + e.target.value)
              }}
              caseSensitive={caseSensitive}
              searchPattern={(d) => d.name + ' ' + d.id}
              option={(d, index) => (
                <option key={index}>
                  {d.name} - {d.phone}
                </option>
              )}
              onPageChange={() => alert('page changed')}
            />
          </div>
        </div>
        <div>
          <h3> example with default select </h3>
          <CodeMirror
            autoCursor={false}
            value={` <ReactPagableSelect
            data={data}
            searchPattern={(d) => d.name + ' ' + d.email}
            caseSensitive={caseSensitive}
            option={(d, index) => (
              <option key={index}>
                {d.name} - {d.email}
              </option>
            )}
            onPageChange={() => alert('page changed')}
          />`}
            options={{
              mode: 'xml',
              theme: 'material',
              lineNumbers: true
            }}
            onChange={(editor, data, value) => {}}
          />
          <div style={{ width: 500, marginTop: 30 }}>
            <ReactPagableSelect
              data={data}
              searchPattern={(d) => d.name + ' ' + d.email}
              caseSensitive={caseSensitive}
              option={(d, index) => (
                <option key={index}>
                  {d.name} - {d.email}
                </option>
              )}
              onPageChange={() => alert('page changed')}
            />
          </div>
        </div>
        <div>
          <h3>
            {' '}
            you cannot search by email in this because search pattern not
            include email{' '}
          </h3>
          <CodeMirror
            autoCursor={false}
            value={` <ReactPagableSelect
            data={data}
            searchPattern={(d) => d.name}
            selectProps={{
              multiple: true,
              onChange: (e) => alert('selected value: ' + e.target.value)
            }}
            caseSensitive={caseSensitive}
            option={(d, index) => (
              <option key={index}>
                {d.name} - {d.email}
              </option>
            )}
            onPageChange={() => alert('page changed')}
          />`}
            options={{
              mode: 'xml',
              theme: 'material',
              lineNumbers: true
            }}
            onChange={(editor, data, value) => {}}
          />
          <div style={{ width: 500, marginTop: 30 }}>
            <ReactPagableSelect
              data={data}
              searchPattern={(d) => d.name}
              selectProps={{
                multiple: true,
                onChange: (e) => alert('selected value: ' + e.target.value)
              }}
              caseSensitive={caseSensitive}
              option={(d, index) => (
                <option key={index}>
                  {d.name} - {d.email}
                </option>
              )}
              onPageChange={() => alert('page changed')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
