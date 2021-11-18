import React, {useState, useReducer} from 'react';
import TodoItem from './TodoItem';

function reducer(todos, action) {
  switch(action.type) {
    case 'add-todo':
      return [...todos, addTodo(action.payload.text)];
    case 'flip':
      return todos.map((todo) => {
        if(todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo;
      });
    case 'delete':
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function addTodo(text) {
  return { id: Date.now(), text: text, complete: false };
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'add-todo', payload: { text: text } });
    setText('');
  }

  // console.log(todos);

  return(
    <div>
      <h1 className="p-3 mb-2 bg-dark text-white">Anastacia TodoApp</h1>

      <form className="w-50 p-3" onSubmit={handleSubmit}>
        <input className="border border-primary" type="text" value={text} onChange={(event) => setText(event.target.value)} />
        <button className="btn btn-primary" type="Submit">Add</button>
      </form>

      {
        todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        })
      }
    </div>
  );
}

export default Todos;
