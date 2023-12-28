import React, { useState } from 'react'
import { connect } from 'react-redux'
import Note from './Note'
import PropTypes from 'prop-types'
const Notes = (props) => {
  const [state, setState] = useState({
    noteDetailId: null
  })
  const toggleShowDetail = (id) => {
    setState({ noteDetailId: id })
  }
  const { notes, filters } = props
  return (
    <div className="note-list">
      {Object.keys(notes)
        .filter((note) => {
          let yearMatch = true
          let monthMatch = true
          if (filters.year) {
            yearMatch =
              notes[note].createdAt.getFullYear() === parseInt(filters.year)
          }
          if (filters.month) {
            monthMatch =
              notes[note].createdAt.getMonth() ===
              parseInt(filters.month) - 1
          }
          return yearMatch && monthMatch
        })
        .map((note) => {
          return (
            <Note
              key={note}
              note={notes[note]}
              toggleShowDetail={toggleShowDetail}
              noteDetailId={state.noteDetailId}
            />
          )
        })}
    </div>
  )
}
Notes.propTypes = {
  notes: PropTypes.array.isRequired,
  filters: {
    month: PropTypes.number,
    year: PropTypes.number
  }
}
export default connect((state) => {
  return { notes: state.notes, filters: state.filters }
})(Notes)
