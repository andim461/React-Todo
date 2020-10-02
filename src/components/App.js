import React from 'react';
import './App.css';
import Header from './Header/Header.js'
import MainField from './MainField/MainField.js'



export function App(props){
    return (
        <main >
            <Header title='React Todo' /> 

            <body className='body'>
                <MainField/>
            
            </body>   
        </main>
    );  
}


