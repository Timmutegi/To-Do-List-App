import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import about from './components/pages/about';


  class App extends Component {
    state = {
      todos: [
        {
          id: uuid.v4(),
          title: 'Take out the trash',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'Wash Dishes',
          completed: true
        },
        {
          id: uuid.v4(),
          title: 'Learn React',
          completed: false
        }
      ]
    }
   
    //Toggle complete
    markComplete = (id) => {
      this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })});

    }

    delTodo =(id) => {
      this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] })
    }

    addTodo = (title) => {
      const newTodo = {
        id: uuid.v4(),
        title,
        completed: false
      }
      this.setState({todos: [...this.state.todos, newTodo]})
    }

    render() {
      return (
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" render={props=> (
                <React.Fragment>
                 
                 <center>
                    <br/>
                    <h3>Add Todo</h3>
                    <AddTodo addTodo={this.addTodo} />
                    <br/>
                    <h3>To-dos</h3>
                 </center> 
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
              )}/>
              <Route path="/about" component={about}/>
             
            </div>
          </div>
        </Router>
        
      )
    }

  }

export default App;
