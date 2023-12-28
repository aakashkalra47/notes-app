import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createNote, deleteNote, editNote } from '../actions'
import moment from 'moment'
import icons from '../icons/sprite.svg'
import PropTypes from 'prop-types'
const Note = (props) => {
  const format = 'D MMM YY'
  const { note, deleteNote, editNote, toggleShowDetail, noteDetailId } = props
  const [state, setState] = useState({
    title: note.title,
    content: note.content,
    id: note.id,
    editMode: false
  })

  const onChangeValue = (event) => {
    setState({ [event.target.name]: event.target.value })
  }
  const ondelete = (id) => {
    deleteNote(id)
  }
  const edit = () => {
    editNote({
      id: state.id,
      title: state.title,
      content: state.content
    })
  }
  const textAreaAdjust = (e) => {
    // element.style.height = "1px";
    // element.style.height = (25+element.scrollHeight)+"px";
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  return (
    <div
      className="note"
      onClick={() => {
        toggleShowDetail(state.id)
      }}
    >
      <div className="card-header note__header">
        <div style={{ flex: 1 }}>
          {state.editMode
            ? (
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
              )
            : (
            <h4
              className="note__title"
              style={{
                wordBreak: 'break-all',
                hyphens: 'auto',
                whiteSpace: 'pre-wrap'
              }}
            >
              {' '}
              {state.title}
            </h4>
              )}
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex' }}>
          {/* {state.editMode ? null : ( */}
          <div
            style={{ visibility: state.editMode ? 'hidden' : 'visible' }}
          >
            {moment(note.createdAt).format(format)}
          </div>
          {/* )} */}
          <button
            className={`${
              state.editMode ? 'btn btn-success' : 'btn btn-primary'
            } `}
            style={{ flex: 1, margin: '0px 10px' }}
            onClick={() => {
              if (state.editMode) edit()
              setState((state) => ({ editMode: !state.editMode }))
            }}
          >
            <svg className="note__icon">
              <use
                xlinkHref={
                  `${icons}#icon-` +
                  `${state.editMode ? 'check' : 'edit'}`
                }
              />
            </svg>
          </button>
          <button
            className="btn btn-danger"
            style={{ flex: 1, margin: '0px 10px' }}
            onClick={() => ondelete(note.id)}
          >
            <svg className="note__icon">
              <use xlinkHref={`${icons}#icon-trash`} />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="card-body note__detail"
        style={
          noteDetailId === state.id
            ? {
                height: '100%',
                padding: '10px 20px'
              }
            : {
                height: 0,
                padding: 0
              }
        }
      >
        <div className="card-text">
          {state.editMode
            ? (
            <textarea
              style={{
                width: '100%',
                overflowWrap: 'break-word',
                overflow: 'hidden'
              }}
              className="lead note__input"
              onChange={onChangeValue}
              name="content"
              type="text"
              value={state.content}
              onFocus={textAreaAdjust}
              placeholder="Take a Note"
            />
              )
            : (
            <p
              style={{ whiteSpace: 'pre-line', overflowWrap: 'break-word' }}
              className="lead note__input"
            >
              {state.content}
            </p>
              )}
        </div>
      </div>
    </div>
  )
}
Note.propTypes = {
  deleteNote: PropTypes.func.isRequired,
  toggleShowDetail: PropTypes.func.isRequired,
  noteDetailId: PropTypes.number.isRequired,
  editNote: PropTypes.func.isRequired,
  note: PropTypes.any
}
export default connect(null, { deleteNote, editNote, createNote })(Note)
