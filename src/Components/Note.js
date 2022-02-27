import React, { Component } from "react";
import { connect } from "react-redux";
import { createNote, deleteNote, editNote } from "../actions";
import moment from "moment";
import icons from "../icons/sprite.svg";
import "./../index.css";
// const format = "D MMM YY h:mm a";
const format = "D MMM YY";
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
  textAreaAdjust(e) {
    // element.style.height = "1px";
    // element.style.height = (25+element.scrollHeight)+"px";
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  render() {
    return (
      <div
        className="note"
        onClick={() => {
          this.props.toggleShowDetail(this.state.id);
        }}
      >
        <div className="card-header note__header">
          <div style={{ flex: 1 }}>
            {this.state.editMode ? (
              <textarea
                className="h4 note__input note__title"
                onChange={this.onChangeValue}
                name="title"
                type="text"
                style={{ width: "100%", overflow: "hidden" }}
                value={this.state.title}
                onFocus={this.textAreaAdjust}
                placeholder="Title"
              />
            ) : (
              <h4
                className="note__title"
                style={{
                  wordBreak: "break-all",
                  hyphens: "auto",
                  whiteSpace: "pre-wrap",
                }}
              >
                {" "}
                {this.state.title}
              </h4>
            )}
          </div>
          <div style={{ marginLeft: "auto", display: "flex" }}>
            {/* {this.state.editMode ? null : ( */}
            <div
              style={{ visibility: this.state.editMode ? "hidden" : "visible" }}
            >
              {moment(this.props.note.createdAt).format(format)}
            </div>
            {/* )} */}
            <button
              className={`${
                this.state.editMode ? "btn btn-success" : "btn btn-primary"
              } `}
              style={{ flex: 1, margin: "0px 10px" }}
              onClick={() => {
                if (this.state.editMode) this.edit();
                this.setState((state) => ({ editMode: !state.editMode }));
              }}
            >
              <svg className="note__icon">
                <use
                  xlinkHref={
                    `${icons}#icon-` +
                    `${this.state.editMode ? "check" : "edit"}`
                  }
                />
              </svg>
            </button>
            <button
              className="btn btn-danger"
              style={{ flex: 1, margin: "0px 10px" }}
              onClick={() => this.ondelete(this.props.note.id)}
            >
              <svg className="note__icon">
                <use xlinkHref={`${icons}#icon-trash`} />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="card-body note__detail"
          style={
            this.props.noteDetailId == this.state.id
              ? {
                  height: "100%",
                  padding: "10px 20px",
                }
              : {
                  height:0,
                  padding:0,
                }
          }
        >
          <div className="card-text">
            {this.state.editMode ? (
              <textarea
                style={{
                  width: "100%",
                  overflowWrap: "break-word",
                  overflow: "hidden",
                }}
                className="lead note__input"
                onChange={this.onChangeValue}
                name="content"
                type="text"
                value={this.state.content}
                onFocus={this.textAreaAdjust}
                placeholder="Take a Note"
              />
            ) : (
              <p
                style={{ whiteSpace: "pre-line", overflowWrap: "break-word" }}
                className="lead note__input"
              >
                {this.state.content}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { deleteNote, editNote, createNote })(Note);
