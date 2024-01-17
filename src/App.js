import React from 'react'
import NotesList from './Components/NoteList'
import Toolbar from './Components/Toolbar'
import Modal from './Components/Modal'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette: {
    mode: 'light'
  }
})
function App () {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Modal />
        <div className="container">
          <div style={{ display: 'flex', flex: 1, marginBottom: 10 }}>
              <Toolbar />
          </div>
          <div>
            <NotesList />
          </div>
        </div>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
