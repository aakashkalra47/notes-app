import React from 'react'
import { connect } from 'react-redux'
import Note from './Note'
import PropTypes from 'prop-types'
const Notes = (props) => {
  const { notes, filters } = props
  return (
    <div className="d-flex flex-wrap">
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
        .map((noteId) => {
          return (
            <Note
              key={noteId}
              note={notes[noteId]}
            />
          )
        })}
    </div>
  )
}
Notes.propTypes = {
  notes: PropTypes.object.isRequired,
  filters: PropTypes.shape({
    month: PropTypes.number,
    year: PropTypes.number
  })
}
export default connect((state) => {
  return { notes: state.notes, filters: state.filters }
})(Notes)
