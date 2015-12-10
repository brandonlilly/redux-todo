import { combineReducers } from 'redux';

const todos = (state = [], action) => {
  switch(action.type) {
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
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
