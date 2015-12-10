let todosId = 0;
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: todosId++,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}
