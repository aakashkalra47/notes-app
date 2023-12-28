import React from 'react'
import NotesList from './Components/NoteList'
import CreateNote from './Components/create'
function App () {
  return (
    <div className="container">
      <div style={{ display: 'flex', flex: 1, marginBottom: 10 }}>
          <CreateNote />
      </div>
      <div>
        <NotesList />
      </div>
    </div>
  )
}

export default App
