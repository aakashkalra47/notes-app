// import CreateNote from "./Components/CreateNote";
import NotesList from "./Components/NoteList";
import CreateNote from "./Components/create";
import Filters from "./Components/Filters";
function App() {
  return (
    <div className="container">
      <div style={{ display: "flex",flex:1, marginBottom: 10 }}>
        {/* <div style={{ margin: "0px 20px" }}> */}
          <CreateNote />
        {/* </div> */}
        {/* <div style={{margin: "0px 20px", marginLeft:'auto' }}>
          <Filters />
        </div> */}
      </div>
      <div>
        <NotesList />
      </div>
    </div>
  );
}

export default App;
