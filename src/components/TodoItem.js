//will load the todo items
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
//put a line through if a task has been completed
    getStyle = () => {
        return { 
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none' 
        }
    } 
   
  render() {
      //pull out id and title from this.props with destructuring
      const { id, title } = this.props.todo;//pass this id up to app.js where the state is
    return(
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)} 
                /> {' '}
            { title }
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
            </p>
        </div>
    )  
  }
}

//.bind is used to attach to the id
//this will be passe upwards to applicationCache.js where the state is

//Proptypes are validations for properties a component should have
//class name.proptypes
//the prop here 'todo' is of type object
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired, //TodoItem.js has a props of todo passed in from Todos.js
    markCompleted: PropTypes.func.isRequired, //markcompleted is a function
    delTodo: PropTypes.func.isRequired//function as well
  }

  const btnStyle = {
      background: '#ff0000',
      color: '#fff',
      border: 'none',
      padding: '5px, 9px',
      borderRadius: '50%',
      cusor: 'pointer',
      float: 'right'
  }
export default TodoItem;
 