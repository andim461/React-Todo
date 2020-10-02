import React from 'react';
import TodoItem from '../TodoItem/TodoItem.js'



const TodoList = (props) => (
    <ul>
    {props.todos.map((todo) => (
        <TodoItem key={todo.id} onComplite={props.onComplite} onDelete={props.onDelete} todo={todo} />))}
    </ul>
    
);
export default TodoList;