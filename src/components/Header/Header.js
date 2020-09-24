import React from 'react';
import './Header.css';

export default function Header (props){
    
    return (
        <header className='head'>
            <h1 className='text' >{props.title}</h1>
        </header>
    );
}
