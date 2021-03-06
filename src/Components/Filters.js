import React, { Component } from "react";
import { applyFilters } from "../actions/index";
import { connect } from "react-redux";
class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = { month: "", year: "" };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeValue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit(event) {
    event.preventDefault();
    this.props.applyFilters(this.state);
  }
  render() {
    return (
      <form
        style={{ marginTop: 10 }}
        className="form-row align-items-center"
        onSubmit={this.onSubmit}
      >
        <h5 style={{ marginRight: 10 }}>Filters</h5>
        <select
          style={{ marginLeft: 10 }}
          name="month"
          value={this.state.month}
          onChange={this.onChangeValue}
        >
          <option value="" disabled>
            Month
          </option>
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">Mar</option>
          <option value="4">Apr</option>
          <option value="5">May</option>
          <option value="6">Jun</option>
          <option value="7">Jul</option>
          <option value="8">Aug</option>
          <option value="9">Sep</option>
          <option value="10">Oct</option>
          <option value="11">Nov</option>
          <option value="12">Dec</option>
        </select>
        <input
          style={{ marginLeft: 10 }}
          type="number"
          name="year"
          value={this.state.year}
          onChange={this.onChangeValue}
          placeholder="year"
        />
        <button className="btn btn-primary" type="submit">
          Apply
        </button>
      </form>
    );
  }
}
export default connect(null, { applyFilters })(Filters);
