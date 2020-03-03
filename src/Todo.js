import React, { Component } from 'react'
import TodoList from './TodoList';
import Todoform from './TodoForm';
class Todo extends Component{

    state = {
        todos : ['Item 1','Item 2']
    }

    handleAddTodo = (todo) => {
       /* this.setState({
            todos : this.state.todos.concat(todo)
        });*/
        this.setState((prevState, prevProps)=>{
            const todos = prevState.todos.concat(todo);
            return {todos}
        });
    }

    render(){
        const{ todos } = this.state;
        return(
            <div>
                <h1>Lista de Tareas</h1>
                <Todoform agregarTodo={this.handleAddTodo}/>
                <TodoList lista = {todos} />
                
            </div>
        );
    }

}

export default Todo;