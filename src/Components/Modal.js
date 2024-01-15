import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { createNote, editNote } from '../Reducers/NotesReducer'
import { setModalState } from '../Reducers/modalReducer'
import { TextareaAutosize, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
const Modal = () => {
  const initialNote = {
    title: '',
    content: ''
  }
  const { isOpen = false, data = {} } = useSelector((state) => state.modal)
  const dispatch = useDispatch()
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
      ? dispatch(editNote({ id: state.id, title: state.title, content: state.content }))
      : dispatch(createNote({ ...state, id: uuidv4(), createdAt: new Date() }))
    handleClose()
  }
  const handleClose = () => {
    dispatch(setModalState({ isOpen: false, data: initialNote }))
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
export default Modal
