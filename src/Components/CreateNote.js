import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { createNote, sortDescending, sortAscending } from "../actions/index";
// import Filters from './Filters';
class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", content: "", editMode: false };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.sortAscendingOrder = this.sortAscendingOrder.bind(this);
    this.sortDescendingOrder = this.sortDescendingOrder.bind(this);
  }
  onSubmit = (event) => {
    console.log("1. event = ", event);
    event.preventDefault();
    console.log("state2", this.state);
    const id = uuidv4();
    console.log("id", id);
    this.props.createNote({ ...this.state, id, createdAt: new Date() });
  };
  onChangeValue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  sortAscendingOrder() {
    this.props.sortAscending();
  }
  sortDescendingOrder() {
    this.props.sortDescending();
  }
  render() {
    console.log("state", this.state);
    return (
      <div style={{marginTop:10}}>
        {this.state.editMode ? (
          <div>
            <form className="card">
              <div className="card-header" style={{ display: "flex" }}>
                <input
                  placeholder="Title"
                  onChange={this.onChangeValue}
                  name="title"
                  type="text"
                  value={this.state.title}
                  style={{ flex: 15 }}
                />
                <button
                  className="btn btn-primary"
                  onClick={(event) => {
                    this.onSubmit(event);
                    this.setState({ editMode: !this.state.editMode });
                  }}
                  style={{ flex: 1 }}
                >
                  Save
                </button>
              </div>
              <div className="card-body">
                <textarea
                  className="card-text"
                  placeholder="Content"
                  style={{width:'100%'}}
                  onChange={this.onChangeValue}
                  name="content"
                  value={this.state.content}
                />
              </div>
            </form>
          </div>
        ) : (
          <div>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.setState({ editMode: !this.state.editMode });
              }}
            >
              Create
            </button>
            <button
            style={{marginLeft:10}}
              className="btn btn-primary"
              onClick={this.sortAscendingOrder}
            >
              &uarr;{" "}
            </button>
            <button
            style={{marginLeft:10}}
              className="btn btn-primary"
              onClick={this.sortDescendingOrder}
            >
              &darr;{" "}
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default connect(null, { createNote, sortDescending, sortAscending })(
  CreateNote
);
