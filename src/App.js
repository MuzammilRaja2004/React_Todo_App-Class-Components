import React, { Component } from "react";
import Plan from "./Components/Plan";
import './App.css'

export class App extends Component {
  state = {
    items: [],
    text: "",
  };
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleAdd = (e) => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  };

  handleDelete = (id) => {
    console.log("Mein Chal Raha Hun" + id);
    const olditems = [...this.state.items];
    console.log("OldItems", olditems);
    const items = olditems.filter((Elements, i) => {
      return i !== id;
    });
    console.log(items);
    this.setState({ items: items });
  };
  handleEditItem = (id) => {
    let Updated_Item = prompt("Enter Value For Updating");
    this.state.items[id] = Updated_Item;
    this.setState({
      items:this.state.items
    })
    console.log(id)
  };

  render() {
    return (
      <div className="main-Div p-3">
        <h1 className="text-capitalize text-center mb-4 ">What's The Plan For Today?</h1>
        <input
          type="text"
          name="Input"
          value={this.state.text}
          onChange={this.handleChange}
          className="form-control text-capitalize"
          placeholder="Add Todo Item"
          maxLength={100}
        />
        <button
          className="btn btn-primary text-uppercase mt-4 mb-4 w-100"
          onClick={this.handleAdd}
        >
          Add Item
        </button>
        <div className="plan_div">
          {this.state.items.map((value, i) => {
            return (
              <Plan
                key={i}
                id={i}
                value={value}
                sendFunction={this.handleDelete}
                sendEditFunction={this.handleEditItem}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
