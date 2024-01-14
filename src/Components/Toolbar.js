import React from 'react'
import { connect } from 'react-redux'
import { sortDescending, sortAscending } from '../actions/notesAction'
import { setModalState } from '../actions/modalActions'
import Filters from './Filters'
import PropTypes from 'prop-types'

const Toolbar = (props) => {
  const sortAscendingOrder = () => {
    props.sortAscending()
  }
  const sortDescendingOrder = () => {
    props.sortDescending()
  }
  const openNote = () => {
    props.setModalState({
      isOpen: true,
      data: {
        content: '',
        title: ''
      }
    })
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
Toolbar.propTypes = {
  sortDescending: PropTypes.func.isRequired,
  sortAscending: PropTypes.func.isRequired,
  setModalState: PropTypes.func.isRequired
}
export default connect(null, { setModalState, sortDescending, sortAscending })(
  Toolbar
)
