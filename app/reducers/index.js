import { combineReducers } from 'redux';

const toggleTodo = (todo, id) => {
  if (todo.id === id) {
    return {
      ...todo,
      completed: !todo.completed,
    };
  }
  return todo;
};

const todos = (state = [], action) => {
  switch(action.type) {
    case 'TOGGLE_TODO':
      return state.map(todo => toggleTodo(todo, action.id));
    case 'DELETE_TODO':
      return state.filter(todo => todo.id != action.id);
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ];
    default:
      return state;
  }
  return state;
}

const reducer = combineReducers({
  todos
});

export default reducer;
