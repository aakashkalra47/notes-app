import React from 'react'
import NotesList from './Components/NoteList'
import Toolbar from './Components/Toolbar'
import Modal from './Components/Modal'
function App () {
  return (
    <>
    <Modal />
    <div className="container">
      <div style={{ display: 'flex', flex: 1, marginBottom: 10 }}>
          <Toolbar />
      </div>
      <div>
        <NotesList />
      </div>
    </div>
    </>
  )
}

export default App
