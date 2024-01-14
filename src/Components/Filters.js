import React, { useState } from 'react'
import { applyFilters } from '../actions/notesAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
const Filters = (props) => {
  const [state, setState] = useState({ month: '', year: '' })
  const onChangeValue = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }
  const onSubmit = (event) => {
    event.preventDefault()
    props.applyFilters(state)
  }
  return (
    <form
      className="filter d-flex align-items-center"
      onSubmit={onSubmit}
    >
      <div className="d-flex align-items-center p-2">
        <h5 className="ml-2">Filters</h5>
      </div>
      <div className="d-flex align-items-center">
        <select
          className="ml-2 custom-select"
          name="month"
          value={state.month}
          onChange={onChangeValue}
        >
          <option value="" disabled>
            Month
          </option>
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">Mar</option>
          <option value="4">Apr</option>
          <option value="5">May</option>
          <option value="6">Jun</option>
          <option value="7">Jul</option>
          <option value="8">Aug</option>
          <option value="9">Sep</option>
          <option value="10">Oct</option>
          <option value="11">Nov</option>
          <option value="12">Dec</option>
        </select>
      </div>
      <div
        className="d-flex align-items-center ml-2"
      >
        <div>
          <input
           className="ml-3 input-field"
            type="number"
            name="year"
            value={state.year}
            onChange={onChangeValue}
            placeholder="year"
            min="0"
            max="9999"
          />
        </div>
        <div className="ml-2">
          <button className="btn btn-primary" type="submit">
            Apply
          </button>
        </div>
      </div>
    </form>
  )
}
Filters.propTypes = {
  applyFilters: PropTypes.func.isRequired
}
export default connect(null, { applyFilters })(Filters)
