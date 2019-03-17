import React, { useEffect, useCallback } from 'react';
import './style.less'
import {useDispatch, useMappedState} from '../../store';

function GetUserList () {
  const { todos } = useMappedState(
    useCallback((state) => ({
      lastUpdated: state.user.lastUpdated,
      todos: state.user.todos,
    }), [])
  );
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch({ type: 'add todo', todo: 'newTodo' });
  }
  const updateTodo = (index) => {
    dispatch({ type: 'update todo', todo: 'todo' + index, index });
  }
  const deleteTodo = (index) => {
    dispatch({ type: 'delete todo', index });
  }

  useEffect(() => {
  }, [])
  return (
    <div>
      user page
      <button onClick={addTodo}>addTodo</button>
      {
        todos.map((item, index) => (
          <div key={index} className="flex">
            <p>{item}</p>
            <button onClick={() => updateTodo(index)}>update</button>
            <button onClick={() => deleteTodo(index)}>delete</button>
          </div>
        ))
      }
    </div>
  );
}

export default GetUserList;