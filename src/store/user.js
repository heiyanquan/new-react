
export const INITIAL_STATE = {
  lastUpdated: 0,
  todos: [
    'Make the fire!',
    'Fix the breakfast!'
  ],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'add todo': {
      return {
        ...state,
        lastUpdated: Date.now(),
        todos: state.todos.concat(action.todo),
      };
    }
    case 'update todo': {
      const todos = state.todos.slice();
      todos[action.index] = action.todo
      return {
        ...state,
        lastUpdated: Date.now(),
        todos
      };
    }
    case 'delete todo': {
      const todos = state.todos.slice();
      todos.splice(action.index, 1);
      return {...state, lastUpdated: Date.now(), todos};
    }
    default:
      return state;
  }
}

export function getList () {
  
}