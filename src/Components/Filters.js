import React, { useState } from 'react'
import { applyFilters } from '../Reducers/filterReducer'
import { useDispatch } from 'react-redux'
import { IconButton, Button, Popper, Box, Select, MenuItem, TextField, FormControl, InputLabel, Paper } from '@mui/material'
import { FilterAlt } from '@mui/icons-material'
const Filters = () => {
  const [state, setState] = useState({ month: '', year: '' })
  const [anchorEl, setAnchorEl] = useState(null)
  const onChangeValue = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }
  const togglePopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const open = Boolean(anchorEl)
  const dispatch = useDispatch()
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(applyFilters(state))
    togglePopper()
  }
  return (
    <>
      <IconButton color='primary' onClick={togglePopper}>
        <FilterAlt/>
      </IconButton>
      <Popper open={open} anchorEl={anchorEl} placement='bottom-end' sx={{ zIndex: 2 }}>
        <Paper elevation={3} variant='elevation'>
          <Box sx={{ borderRadius: 2, boxShadow: '0 2rem 5rem rgba(0,0,0,.06)', p: 3, bgcolor: 'background.paper' }}>
            <h5 className='mb-4 '>Filters</h5>
            <FormControl>
              <div className='d-flex'>
                <div className='w-50'>
                  <InputLabel id="test-select-label">Month</InputLabel>
                  <Select
                    label="Month"
                    labelId="test-select-label"
                    color='primary'
                    variant='outlined'
                    name='month'
                    fullWidth
                    value={state.month}
                    onChange={onChangeValue}
                  >
                    <MenuItem value="1">Jan</MenuItem>
                    <MenuItem value="2">Feb</MenuItem>
                    <MenuItem value="3">Mar</MenuItem>
                    <MenuItem value="4">Apr</MenuItem>
                    <MenuItem value="5">May</MenuItem>
                    <MenuItem value="6">Jun</MenuItem>
                    <MenuItem value="7">Jul</MenuItem>
                    <MenuItem value="8">Aug</MenuItem>
                    <MenuItem value="9">Sep</MenuItem>
                    <MenuItem value="10">Oct</MenuItem>
                    <MenuItem value="11">Nov</MenuItem>
                    <MenuItem value="12">Dec</MenuItem>
                  </Select>
                </div>
                <div className='w-50'>
                  <TextField
                    type="number"
                    label="Year"
                    name='year'
                    value={state.year}
                    onChange={onChangeValue}
                    min="0"
                    max="9999"
                  />
                </div>
              </div>
              <div className="d-flex mt-3 flex-row-reverse">
                <Button onClick={onSubmit} color='primary' variant='contained'>
                  Apply
                </Button>
              </div>
            </FormControl>
          </Box>
        </Paper>
      </Popper>
    </>
  )
}
export default Filters
