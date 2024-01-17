import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'
const Notes = () => {
  const notes = useSelector(state => state.notes)
  const filters = useSelector(state => state.filters)
  return (
    <div className="d-flex flex-wrap">
      {
        notes.filter((note) => {
          let yearMatch = true
          let monthMatch = true
          if (filters.year) {
            yearMatch =
              note.createdAt.getFullYear() === parseInt(filters.year)
          }
          if (filters.month) {
            monthMatch =
              note.createdAt.getMonth() ===
              parseInt(filters.month) - 1
          }
          return yearMatch && monthMatch
        })
          .map((note) => {
            return (
            <Note
              key={note.id}
              note={note}
            />
            )
          })}
    </div>
  )
}
export default Notes
