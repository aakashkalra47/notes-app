import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../Reducers/notesSlice'
import { setModalState } from '../Reducers/modalSlice'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardContent, Typography, IconButton } from '@mui/material'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
const Note = (props) => {
  const format = 'D MMM YY'
  const { note } = props
  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(deleteNote(note.id))
  }
  const onEdit = () => {
    dispatch(setModalState({
      isOpen: true,
      data: {
        id: note.id,
        title: note.title,
        content: note.content
      }
    }))
  }
  return (
    <div className='p-1 col-4'>
      <Card sx={{ height: 200 }}>
        <CardHeader
          style={{
            wordBreak: 'break-all',
            hyphens: 'auto',
            whiteSpace: 'pre-wrap'
          }}
          action={
            <>
              <IconButton color='primary' onClick={onEdit}>
                <ModeEditIcon />
              </IconButton>
              <IconButton color='primary' onClick={onDelete}>
                <DeleteIcon />
              </IconButton>
            </>
          }
          title={note.title}
          subheader={moment(note.createdAt).format(format)}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {note.content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
Note.propTypes = {
  note: PropTypes.any
}
export default Note
