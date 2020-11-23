import React, { Component } from "react";
import { connect } from "react-redux";
import Note from "./Note";
class Notes extends Component {
  render() {
    const notes = this.props.notes;
    console.log("filetrs", this.props.filters);
    return Object.keys(notes)
      .filter((note) => {
        let yearMatch = true;
        let monthMatch = true;
        if (this.props.filters.year) {
          console.log("1. year filter = ", notes[note].createdAt.getFullYear());
          console.log("2. year filter = ", this.props.filters.year);
          console.log(
            "3. year filter = ",
            notes[note].createdAt.getFullYear() == this.props.filters.year
          );
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
        return <Note key={note} note={notes[note]} />;
      });
  }
}
export default connect((state) => {
  return { notes: state.notes, filters: state.filters };
})(Notes);
