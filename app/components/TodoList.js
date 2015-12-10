import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import { addTodo, toggleTodo, deleteTodo } from '../actions';

class TodoList extends Component {
  render() {
    const { todos, dispatch } = this.props;

    return (
      <div>
        <h2>TodoList</h2>
        <ul>
          {todos.map(todo =>
            <TodoItem todo={todo} key={todo.id}
              onClick={(id) => {
                dispatch(toggleTodo(id));
              }}
              onDelete={id => {
                dispatch(deleteTodo(id));
              }}
            />
          )}
        </ul>
        <TodoInput
          onSubmit={(text) => {
            dispatch(addTodo(text));
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList);
