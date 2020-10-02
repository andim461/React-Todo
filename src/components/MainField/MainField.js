import React from 'react';
import {Todos, deleteItem, addItem, compliteItem} from '../../Todos.js';
import TodoList from '../TodoList/TodoList.js';
import IconButton from '@material-ui/core/IconButton';
import {AddCircle} from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import './MainField.css';

let id = 1000;

class MainField extends React.Component{
    constructor(props){
        super(props);
        this.state = {todos:Todos, addIsVisible: false, text:'', isEmpty: false};

    }
    onTextChange = (e) => {
        this.setState({text: e.target.value,});
        
        
    }
    onAddClick = (e) => {
        this.setState({addIsVisible: true, } );
        
    };
    onCloseAddBox = (e) => {
        if(this.state.text === '' ){
            this.setState({isEmpty: true});
            
        }
        else{
            const newTodo = {id:(id++), text: this.state.text, complited: false,};
            addItem(newTodo);
            this.setState({todos: Todos, addIsVisible: false, text:'', isEmpty: false,});
        }
        
    };
    onDeleteClick = (id) => {
        deleteItem(id);
        this.setState(Todos);
        
    };
    onCompliteClick = (id) => {
        compliteItem(id);
        this.setState(Todos);
    };
render(){
    return(
        <div className='MainField'>
            {this.state.addIsVisible ? 
            (<div >
            <Fade in={this.state.addIsVisible}>
                <Box className='AddWindow' >
                    <h2>Add Todo</h2>
                    {this.state.isEmpty ? 
                    <TextField error id='error' helperText='It is empty' fullWidth={true} label="Error" variant="outlined" onChange={this.onTextChange}/>
                    :
                    <TextField id='outlined-basic' fullWidth={true} label="Todo" variant="outlined" onChange={this.onTextChange}/>
                    }

                    <Button className='AddButton' variant="contained" color="secondary" onClick={this.onCloseAddBox}>
                    Add
                    </Button>
                </Box>
            </Fade>
            </div>) 
            :  
            (<IconButton onClick={this.onAddClick} size='small' color='secondary'>
                <AddCircle style={{ fontSize: 30 }} />
            </IconButton>)
            }
            <TodoList todos={this.state.todos} onComplite={this.onCompliteClick} onDelete={this.onDeleteClick} />
        </div>
    );
}



}
export default MainField;