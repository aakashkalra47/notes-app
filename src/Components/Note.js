import React, { Component } from "react";
import { connect } from "react-redux";
import { createNote, deleteNote, editNote } from "../actions";
import moment from "moment";
const format = "D MMM YY h:mm a";
class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.note.title,
      content: this.props.note.content,
      id: this.props.note.id,
      editMode: false,
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.edit = this.edit.bind(this);
  }
  onChangeValue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  ondelete(id) {
    this.props.deleteNote(id);
  }
  edit() {
    this.props.editNote({
      id: this.state.id,
      title: this.state.title,
      content: this.state.content,
    });
  }
  render() {
    return (
      <div className="card" style={{marginBottom:10}}>
        <div style={{ display: "flex" }} className="card-header">
          <div style={{ flex: 15 }}>
            {this.state.editMode ? (
              <input
                className="h4"
                onChange={this.onChangeValue}
                name="title"
                type="text"
                value={this.state.title}
              />
            ) : (
              <>
                <h4 className="card-title"> {this.props.note.title}</h4>
              </>
            )}
          </div>
          {this.state.editMode ? null : (
            <div>{moment(this.props.note.createdAt).format(format)}</div>
          )}
          <button
            className={
              this.state.editMode ? "btn btn-success" : "btn btn-primary"
            }
            style={{ flex: 1, margin: "0px 20px" }}
            onClick={() => {
              this.setState((state) => ({ editMode: !state.editMode }));
              if (this.state.editMode) this.edit();
            }}
          >
            {this.state.editMode ? "Save" : "Edit"}
          </button>
          <button
            className="btn btn-danger"
            style={{ flex: 1, margin: "0px 20px" }}
            onClick={() => this.ondelete(this.props.note.id)}
          >
            Delete
          </button>
        </div>
        <div className="card-body">
          <div className="card-text">
            {this.state.editMode ? (
              <input
                className="lead"
                onChange={this.onChangeValue}
                name="content"
                type="text"
                value={this.state.content}
              />
            ) : (
                <p style={{'whiteSpace':'pre-line'}}>{this.state.content}</p>
              
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { deleteNote, editNote, createNote })(Note);
