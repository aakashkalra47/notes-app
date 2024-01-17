import React from 'react'
import { useDispatch } from 'react-redux'
import { sortDescending, sortAscending } from '../Reducers/notesReducer'
import { setModalState } from '../Reducers/modalReducer'
import Filters from './Filters'
import { Button, IconButton } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
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
    <div style={{ marginTop: 10 }} className="w-100">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Button
            variant="contained"
            onClick={openNote}
          >
            Take a Note
          </Button>
          <IconButton
            color='primary'
            style={{ marginLeft: '10px' }}
            onClick={sortAscendingOrder}
          >
            <ArrowUpwardIcon/>
          </IconButton>
          <IconButton
            color='primary'
            style={{ marginLeft: 10 }}
            onClick={sortDescendingOrder}
          >
            <ArrowDownwardIcon/>
          </IconButton>
        </div>
        <div>
          <Filters />
        </div>
      </div>
    </div>
  )
}
export default Toolbar
