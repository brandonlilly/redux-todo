import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoItem extends Component {
  render() {
    const { todo, onClick, onDelete } = this.props;

    let style = {
      textDecoration: todo.completed ? 'line-through' : 'none',
    };

    return (
      <li
        style={style}
        onClick={() => {
          onClick(todo.id);
        }}
      >
        {todo.text}
        <button
          value="X"
          onClick={e => {
            e.preventDefault();
            onDelete(todo.id);
          }}
        >X</button>
      </li>
    );
  }
}

export default TodoItem;
