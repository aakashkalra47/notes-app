import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'
const Notes = () => {
  const notes = useSelector(state => state.notes)
  const filters = useSelector(state => state.filters)
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
export default Notes
