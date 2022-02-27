import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { createNote, sortDescending, sortAscending } from "../actions/index";
import icons from "../icons/sprite.svg";
import Filters from "./Filters";
import "./../index.css";
const initialState = {
  title: "",
  content: "",
  editMode: false,
};
class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.sortAscendingOrder = this.sortAscendingOrder.bind(this);
    this.sortDescendingOrder = this.sortDescendingOrder.bind(this);
  }
  onSubmit = (event) => {
    // console.log("1. event = ", event);
    // console.log("state2", this.state);
    // console.log("id", id);
    event.preventDefault();
    const id = uuidv4();
    this.props.createNote({ ...this.state, id, createdAt: new Date() });
    this.setState(initialState);
  };
  onChangeValue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  cancelEdit = () => {
    this.setState(initialState);
  };
  sortAscendingOrder() {
    this.props.sortAscending();
  }
  sortDescendingOrder() {
    this.props.sortDescending();
  }
  textAreaAdjust(e) {
    // element.style.height = "1px";
    // element.style.height = (25+element.scrollHeight)+"px";
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }
  render() {
    return (
      <div style={{ marginTop: 10, border: "none" }} className="note">
        {this.state.editMode ? (
          <div style={{ width: "100%" }}>
            <form className="card" style={{ width: "100%" }}>
              <div className="card-header note__header">
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
                <button
                  className="btn btn-primary"
                  onClick={(event) => {
                    this.onSubmit(event);
                    this.setState({ editMode: !this.state.editMode });
                  }}
                  style={{ margin: "0px 10px" }}
                >
                  <svg className="note__icon">
                    <use xlinkHref={`${icons}#icon-check`} />
                  </svg>
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.cancelEdit();
                  }}
                  style={{ margin: "0px 10px" }}
                >
                  <svg className="note__icon">
                    <use xlinkHref={`${icons}#icon-trash`} />
                  </svg>
                </button>
              </div>
              <div className="card-body">
                <div className="card-text">
                  <textarea
                    style={{
                      width: "100%",
                      overflowWrap: "break-word",
                      overflow: "hidden",
                      resize:'none'
                    }}
                    className="lead note__input"
                    onChange={this.onChangeValue}
                    name="content"
                    type="text"
                    placeholder="Take a Note"
                    value={this.state.content}
                    onFocus={this.textAreaAdjust}
                  />
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  this.setState({ editMode: !this.state.editMode });
                }}
              >
                Take a Note
              </button>
              <button
                style={{ marginLeft: "10px" }}
                className="btn btn-primary"
                onClick={this.sortAscendingOrder}
              >
                &uarr;{" "}
              </button>
              <button
                style={{ marginLeft: 10 }}
                className="btn btn-primary"
                onClick={this.sortDescendingOrder}
              >
                &darr;{" "}
              </button>
            </div>
            <div>
              <Filters />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default connect(null, { createNote, sortDescending, sortAscending })(
  CreateNote
);
