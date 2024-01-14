import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createNote, editNote } from '../actions/notesAction'
import { TextareaAutosize, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { setModalState } from '../actions/modalActions'
const Modal = (props) => {
  const initialNote = {
    title: '',
    content: ''
  }
  const { isOpen = false, data = {} } = props.modal
  const [open, setOpen] = useState(isOpen)
  const [state, setState] = useState(initialNote)
  useEffect(() => {
    setState({ ...data })
  }, [data])
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])
  const onChangeValue = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }
  const onSubmit = (event) => {
    event.preventDefault()
    state.id
      ? props.editNote({ id: state.id, title: state.title, content: state.content })
      : props.createNote({ ...state, id: uuidv4(), createdAt: new Date() })
    handleClose()
  }
  const handleClose = () => {
    props.setModalState({ isOpen: false, data: initialNote })
  }
  return (
        <Dialog open={open}
            onClose={handleClose}
        >
            <DialogTitle>{state.id ? 'Update Note' : 'Add a note'}</DialogTitle>
            <DialogContent>
                <TextareaAutosize
                    className='w-100'
                    onChange={onChangeValue}
                    minRows={2}
                    size="lg"
                    variant="plain"
                    name="title"
                    value={state.title}
                    placeholder="Title"
                />
                <TextareaAutosize
                    className='w-100'
                    onChange={onChangeValue}
                    minRows={4}
                    size="lg"
                    name="content"
                    variant="plain"
                    placeholder="Take a Note"
                    value={state.content}
                />
            </DialogContent>
            <DialogActions>
                <Button style={{ color: 'grey' }} onClick={handleClose}>Cancel</Button>
                <Button style={{ color: 'grey' }} onClick={onSubmit}>Save</Button>
            </DialogActions>
        </Dialog>
  )
}
Modal.propTypes = {
  modal: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired,
    data: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      id: PropTypes.string
    })
  }),
  createNote: PropTypes.func.isRequired,
  editNote: PropTypes.func.isRequired,
  setModalState: PropTypes.func.isRequired
}
export default connect(({ modal }) => ({ modal }), { createNote, setModalState, editNote })(
  Modal
)
