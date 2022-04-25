import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={props.handleChangeProps}
        deleteTodoProps={props.deleteTodoProps}
        setUpdate={props.setUpdate}
      />
    ))}
  </ul>
);

export default TodoList;

// 1
{ /* <div>
  <h1>Hello from Create React App</h1>
  <p>I am in a React Component!</p>
</div> */ }

// 2
{ /* <li key={todo.id}>{todo.title}</li> */ }
