import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class AddTodo extends Component {
    //form input fields should have a state 
    //this state is a component levek state for the form input field
    //but the todos themselves have an app  level state
    state = {
        title: ''
    }

    //onchange event necessary to hanlde form input field
    //set the title to user input
    //somethingChanged = (e) => this.setState({ title: e.target.value }); works fine for one field
    somethingChanged = (e) => this.setState({ [e.target.name]: e.target.value});//set the name attribute to what is typed, suitable for many fields
    //the state is above, not climbing up to app.js
        //works like normal event handler
        //handles the onchamge event, which is when something is typed in the input field


    
        onSubmit = (e) => {
            e.preventDefault();
            //call
            this.props.addTodo(this.state.title);//pass this upward to app.js
            //create a method called AddTodo in app.js, create a prop callled AddTodo to the AddTodo component in app.js
        
            this.setState({ title: '' });//clear the state object after adding user input 
        }


    render() {
     
    return(
        <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
            <input 
                type="text" 
                name="title"
                style={{flex: '10', padding: '5px'}}
                placeholder="Add Todo Item"
                value={this.state.title}
                onChange={this.somethingChanged}
            />
            <input type="submit" value="Add new item" 
            className="btn" 
            style={{flex: '1'}}/>
        </form>
    )  
  }
}

//define prop types
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
  
  }

export default AddTodo;
