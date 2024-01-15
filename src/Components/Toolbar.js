import React from 'react'
import { useDispatch } from 'react-redux'
import { sortDescending, sortAscending } from '../Reducers/NotesReducer'
import { setModalState } from '../Reducers/modalReducer'
import Filters from './Filters'

const Toolbar = () => {
  const dispatch = useDispatch()
  const sortAscendingOrder = () => {
    dispatch(sortAscending())
  }
  const sortDescendingOrder = () => {
    dispatch(sortDescending())
  }
  const openNote = () => {
    dispatch(setModalState({
      isOpen: true,
      data: {
        content: '',
        title: ''
      }
    }))
  }
  return (
    <div style={{ marginTop: 10, border: 'none' }} className="note">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <button
            className="btn btn-primary"
            onClick={openNote}
          >
            Take a Note
          </button>
          <button
            style={{ marginLeft: '10px' }}
            className="btn btn-primary"
            onClick={sortAscendingOrder}
          >
            &uarr;{' '}
          </button>
          <button
            style={{ marginLeft: 10 }}
            className="btn btn-primary"
            onClick={sortDescendingOrder}
          >
            &darr;{' '}
          </button>
        </div>
        <div>
          <Filters />
        </div>
      </div>
    </div>
  )
}
export default Toolbar
