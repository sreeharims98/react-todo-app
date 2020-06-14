import React, { Component } from "react";
import ListItem from "./ListItem";
import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      todoList: {
        text: "",
        key: "",
      },
    };
    this.todoInputHandle = this.todoInputHandle.bind(this);
    this.formOnSubmitHandler = this.formOnSubmitHandler.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  todoInputHandle = (e) => {
    this.setState({
      todoList: {
        text: e.target.value,
        key: e.target.value,
      },
    });
  };

  formOnSubmitHandler = (e) => {
    e.preventDefault();
    const newItem = this.state.todoList;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        todoList: {
          text: "",
          key: "",
        },
      });
    }
  };
  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  };
  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };
  render() {
    return (
      <div>
        <form className="" action="" onSubmit={this.formOnSubmitHandler}>
          <input
            className="todo-input"
            type="text"
            placeholder="Enter Text Here"
            value={this.state.todoList.text}
            onChange={this.todoInputHandle}
          />
          <button className="add-btn">ADD</button>
        </form>
        <ListItem
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        />
      </div>
    );
  }
}

export default Header;
