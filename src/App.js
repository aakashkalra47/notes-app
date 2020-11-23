import CreateNote from "./Components/CreateNote";
import NotesList from "./Components/NoteList";
import Filters from './Components/Filters'
function App() {
  return (
    <div >
      <div style={{ display: "flex",marginBottom:10 }}>
        <div style={{flex:2, margin:'0px 20px'}}><CreateNote /></div>
        <div style={{flex:1,margin:'0px 20px'}}><Filters/></div>
      </div>
      <div>
        <NotesList />
      </div>
    </div>
  );
}

export default App;
