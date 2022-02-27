import React, { Component } from "react";
import { connect } from "react-redux";
import Note from "./Note";
class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteDetailId: null,
    };
  }
  toggleShowDetail = (id) => {
    // console.log(id);
    this.setState({ noteDetailId: id });
  };
  render() {
    const notes = this.props.notes;
    // console.log("filetrs", notes);
    return (
      <div className="note-list">
        {Object.keys(notes)
          .filter((note) => {
            let yearMatch = true;
            let monthMatch = true;
            if (this.props.filters.year) {
              // console.log("1. year filter = ", notes[note]);
              // console.log("2. year filter = ", this.props.filters.year);
              // console.log(
              //   "3. year filter = ",
              //   notes[note].createdAt.getFullYear() == this.props.filters.year
              // );
              yearMatch =
                notes[note].createdAt.getFullYear() == this.props.filters.year;
            }
            if (this.props.filters.month) {
              monthMatch =
                notes[note].createdAt.getMonth() ==
                Number(this.props.filters.month) - 1;
            }
            return yearMatch && monthMatch;
          })
          .map((note) => {
            return (
              <Note
                key={note}
                note={notes[note]}
                toggleShowDetail={this.toggleShowDetail}
                noteDetailId={this.state.noteDetailId}
              />
            );
          })}
      </div>
    );
  }
}
export default connect((state) => {
  return { notes: state.notes, filters: state.filters };
})(Notes);
