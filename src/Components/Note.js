import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteNote } from '../actions/notesAction'
import { setModalState } from '../actions/modalActions'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardContent, Typography, IconButton, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
const Note = (props) => {
  const format = 'D MMM YY'
  const {
    note,
    deleteNote
  } = props
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const onDelete = () => {
    deleteNote(note.id)
    handleClose()
  }
  const onEdit = () => {
    props.setModalState({
      isOpen: true,
      data: {
        id: note.id,
        title: note.title,
        content: note.content
      }
    })
    handleClose()
  }
  return (
    <Card sx={{ height: 200 }} className='col-4 pa-0'>
      <CardHeader
        style={{
          wordBreak: 'break-all',
          hyphens: 'auto',
          whiteSpace: 'pre-wrap'
        }}
        action={
          <>
            <IconButton color='primary' onClick={handleClick} >
              <MoreVertIcon/>
            </IconButton>
            <Menu
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              >
              <MenuItem onClick={onEdit}>Edit</MenuItem>
              <MenuItem onClick={onDelete}>Delete</MenuItem>
            </Menu>
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
  )
}
Note.propTypes = {
  deleteNote: PropTypes.func.isRequired,
  note: PropTypes.any,
  setModalState: PropTypes.func.isRequired
}
export default connect(null, { deleteNote, setModalState })(Note)
