import React, { Component } from 'react';
import Todos from './components/Todos';  
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';//Router is the alias for BrowserRouter since the name is long
//import uuid from 'uuid';//random id generator
import axios from 'axios';
import './App.css';

//react router dom, exact link in header.js, react.fragment about page, json place holder - get (using component did mount), del, post, set proptypes
//export default above and below
class App extends Component {

  //state is defined here so it can be passed down to other components
  //since they will be needing it
  state = {
    todos: [] 
  }

  //load the todos when the todo components mounts the dom
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10') 
      .then(res => this.setState({ todos: res.data }))
  }
  
//toggle completed
  markCompleted = (id) => {
//id is passed upwards from TodoItem.js

    //console.log(id);
    //change  state based on completed task
    this.setState({ todos: this.state.todos.map(todo => {
      //check if id matches
      if(todo.id === id){
        todo.completed = !todo.completed;//when the check box is ticked, change the state of the task
      console.log(todo.completed);
      }
      return todo;
    }) });
  }


  delTodo = (id) => {
    /*console.log(id);
    //here i used the filter high order array method, which returns a new array excluding the one filtered out
    which is the one with the id passed in. basically deletes an item
    */
   //use spread operatorr to bring in everything from the state
   //filter loops thorugh
   
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }


  //add new todo item
  //doesn't really save, just erturns what we typed in as new data
  addTodo = (title) => {
   axios.post('https://jsonplaceholder.typicode.com/todos', {
     title: title, //or just title once
     completed: false
   })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
   }
   //make a copy of the state using the spread operator and add the new item to it
   //todos is the object in the state
  
  render() { 
    //console.log(this.state.todos);
    /*
    how react router works
    it wraps the entire application

    the Header component is outside the Route cos it is used by all routes/pages
    
    the home link shows the todos and addtodo component, plus the static header component

    so the first Route is for the home page only
    exact ensures it shows no other Route apart from the home page
    react.fragment is a ghost element

    to add a route that has a single component, just a component prop i.e component={name of component}
    for a Route with more than one prop, use render={props => ...
      when the home page loads, the two components addtodo and todos shownpm i 
    */
    return (
      <Router>
      <div className="App">
      
        <div className="container">
                <Header />
                <Route exact path="/" render={props => (
                  <React.Fragment>
                      <AddTodo addTodo={this.addTodo} />
                      <Todos todos={this.state.todos} markCompleted={this.markCompleted} 
                      delTodo={this.delTodo}/>
                  </React.Fragment>
                )} />
                
                <Route path="/about" component={About} />
                  
                
        </div>
        
      </div>
      </Router>
    );
  }
}

export default App;
