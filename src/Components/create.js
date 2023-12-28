import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { connect } from 'react-redux'
import { createNote, sortDescending, sortAscending } from '../actions/index'
import icons from '../icons/sprite.svg'
import Filters from './Filters'
import PropTypes from 'prop-types'
const initialState = {
  title: '',
  content: '',
  editMode: false
}
const CreateNote = (props) => {
  const [state, setState] = useState(initialState)
  const onSubmit = (event) => {
    event.preventDefault()
    const id = uuidv4()
    props.createNote({ ...state, id, createdAt: new Date() })
    setState(initialState)
  }
  const onChangeValue = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }
  const cancelEdit = () => {
    setState(initialState)
  }
  const sortAscendingOrder = () => {
    props.sortAscending()
  }
  const sortDescendingOrder = () => {
    props.sortDescending()
  }
  const textAreaAdjust = (e) => {
    // element.style.height = "1px";
    // element.style.height = (25+element.scrollHeight)+"px";
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight}px`
  }
  return (
    <div style={{ marginTop: 10, border: 'none' }} className="note">
      {state.editMode && (
        <div className="edit-note">
          <form className="card" style={{ width: '100%' }}>
            <div className="card-header note__header">
              <textarea
                className="h4 note__input note__title"
                onChange={onChangeValue}
                name="title"
                type="text"
                style={{ width: '100%', overflow: 'hidden' }}
                value={state.title}
                onFocus={textAreaAdjust}
                placeholder="Title"
              />
              <button
                className="btn btn-primary"
                onClick={(event) => {
                  onSubmit(event)
                  setState({ editMode: !state.editMode })
                }}
                style={{ margin: '0px 10px' }}
              >
                <svg className="note__icon">
                  <use xlinkHref={`${icons}#icon-check`} />
                </svg>
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  cancelEdit()
                }}
                style={{ margin: '0px 10px' }}
              >
                <svg className="note__icon">
                  <use xlinkHref={`${icons}#icon-trash`} />
                </svg>
              </button>
            </div>
            <div className="card-body">
              <div className="card-text">
                <textarea
                  style={{
                    width: '100%',
                    overflowWrap: 'break-word',
                    overflow: 'hidden',
                    resize: 'none'
                  }}
                  className="lead note__input"
                  onChange={onChangeValue}
                  name="content"
                  type="text"
                  placeholder="Take a Note"
                  value={state.content}
                  onFocus={textAreaAdjust}
                />
              </div>
            </div>
          </form>
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => {
              setState({ editMode: !state.editMode })
            }}
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
CreateNote.propTypes = {
  children: PropTypes.element.isRequired,
  sortDescending: PropTypes.func.isRequired,
  sortAscending: PropTypes.func.isRequired,
  createNote: PropTypes.func.isRequired
}
export default connect(null, { createNote, sortDescending, sortAscending })(
  CreateNote
)
