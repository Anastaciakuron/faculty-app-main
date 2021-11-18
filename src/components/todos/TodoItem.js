import React from 'react';

function TodoItem({todo, dispatch}) {
  return(
    <div className="w-50 p-3">
      <input class="btn btn-success" type="checkbox" onChange={() => dispatch({ type: 'flip', payload: {id : todo.id} })} />
      
      <span style={{ textDecoration: todo.complete ? 'line-through' : 'none'}}>{todo.text}</span>
      
      <button className="btn btn-outline-danger" onClick={() => dispatch({ type: 'delete', payload: {id : todo.id}})}>X</button>
    </div>
  );
}

export default TodoItem;
