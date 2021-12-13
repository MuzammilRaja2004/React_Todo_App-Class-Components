import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
export class Plan extends Component {
  render() {
    return (
      <div className="d-flex ">
        <li className="text-capitalize shadow p-2 my-2 w w-100  ">
          {this.props.value}
        </li>
        <button
          className="btn btn1 btn-warning shadow text-dark my-2 m ml-5 w-10"
          onClick={() => {
            this.props.sendEditFunction(this.props.id);
          }}
        >
          <EditIcon />
        </button>
        <button
          className="btn btn-warning shadow text-dark my-2  w-10"
          onClick={() => {
            this.props.sendFunction(this.props.id);
          }}
        >
          <DeleteForeverIcon />
        </button>
      </div>
    );
  }
}

export default Plan;
