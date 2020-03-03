import React, { Component } from 'react'

class TodoForm extends Component{
    state = {
        newTodo: ''
    }

    /*constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }*/
    handleClick=()=>{
        //this.state.newTodo;
        this.props.agregarTodo(this.state.newTodo);
        this.setState(
            {newTodo:''}
        )
    }
    render(){
        const { newTodo } = this.state;
        return(
            <form>
                <input name="nuevoTodo"
                value= {newTodo}
                onChange={(e)=>{
                    const value =e.target.value;
                    this.setState(
                        {newTodo : value}   
                    )

                }}
                placeholder="Ingresar un nuevo Todo"/>
                <button type="button" onClick = {this.handleClick} >Agregar</button>
            </form>
        )
    }

}

export default TodoForm ;