import React, { Component } from 'react';
import TodoItem from './TodoItem';//component loads the todoItems 

import PropTypes from 'prop-types';

class Todos extends Component {
  // markCompleted = () => {  moved up to app.js where the state is
  //   console.log(this.props);
  // }
  render() {
      //console.log(this.props.todos); todos is passed down here as props
      //this.props stands for mytodos in app.js
      //loop through the todos and display in TodoItems.js
      return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markCompleted={this.props.markCompleted}
        delTodo={this.props.delTodo}/> 
        //todo= is passed in as a prop here, can be referenced in TodoItem.js
    ));  
  }
}
//markCompleted={this.props.markCompleted}
 //1st markcompleted is a prop here   2nd one is a  prop method in app.js
//Proptypes are validations for properties a component should have
//class name.proptypes
//ccontains an object of props
//specify the proptypes used
Todos.propTypes = {
  todos: PropTypes.array.isRequired, //Todos.js has a props of todos passed in from app.js
  markCompleted: PropTypes.func.isRequired, //markcompleted is a function
  delTodo: PropTypes.func.isRequired//function as well
}

export default Todos;
