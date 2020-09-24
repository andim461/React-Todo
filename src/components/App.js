import React from 'react';
import './App.css';
import Header from './Header/Header.js'
import TodoItem from './TodoItem/TodoItem.js'


export function App(props){
    return (
        <main >
            <Header title='React Todo' /> 

            <body className='body'>
            <TodoItem text='Read about react' />
            <TodoItem text='Do some work' />
            <TodoItem text='Do nothing' />
            
            </body>   
        </main>
    );  
}


