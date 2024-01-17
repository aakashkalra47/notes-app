import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { createNote, editNote } from '../Reducers/notesSlice'
import { setModalState } from '../Reducers/modalSlice'
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
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
            <DialogTitle style={{ color: 'grey' }}>{state.id ? 'Update Note' : 'Add a note'}</DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    multiline
                    className='my-2'
                    onChange={onChangeValue}
                    rows={2}
                    color='grey'
                    variant="outlined"
                    name="title"
                    value={state.title}
                    placeholder="Title.."
                />
                <TextField
                    multiline
                    fullWidth
                    onChange={onChangeValue}
                    rows={4}
                    color='grey'
                    name="content"
                    variant="outlined"
                    placeholder="Take a Note..."
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
