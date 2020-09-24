import React from 'react';
import './Head.css'
import AddButton from './AddButton/AddButton.js'


export default function Head (props){
    
    return (
        <div className='head'>
            <h1 className='text' >{props.text}</h1>
            <AddButton/>
        </div>
    );
}
