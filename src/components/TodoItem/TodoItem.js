import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import './TodoItem.css';


export default function Todo(props){
    const handleChange = (e) => {
        props.onComplite(props.todo.id);
        
    };
    const handleDelete = (e) => {
        props.onDelete(props.todo.id);
    };
    
    return (
        <div className={props.todo.complited ? 'todoneItem' : 'todoItem'}>
            <Checkbox checked={props.todo.complited} onChange={handleChange} />
            <span>{props.todo.text}</span>
            <IconButton onClick={handleDelete}>
                <Delete color='secondary'/>
            </IconButton>
        </div>
    );   
}