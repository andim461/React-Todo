import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import './TodoItem.css';


export default function Todo(props){
    const [isChecked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked(!isChecked);
        //TODO: зачеркнуть текст и сдвинуть ячейку в самый низ
        // добавить к счетчику +1
    };
    const handleDeleteClick = () => {
        //удалить ячейку -1
    };
    return (
        <div className='todoItem'>
            <Checkbox checked={isChecked} onChange={handleChange} />
            <span>{props.text}</span>
            <IconButton onClick={handleDeleteClick}>
                <Delete color='secondary'/>
            </IconButton>
        </div>
    );   
}