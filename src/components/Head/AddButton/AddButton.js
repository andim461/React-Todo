import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {AddCircle} from '@material-ui/icons';


export default function AddButton(props){
    const onAddClick = () =>{
        
    }; 
    return (
            <IconButton onClick={onAddClick} size='small' color='inherit'>
                <AddCircle style={{ fontSize: 30 }} />
            </IconButton>
    );
}