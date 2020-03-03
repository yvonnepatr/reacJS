import React, { Component } from 'react'

function TodoList( {lista} ){
    return (
        <ul>
           {lista.map(
               todo => (
               <li>{ todo}</li>
               )


           )} 
        </ul>
    );
}
export default TodoList;