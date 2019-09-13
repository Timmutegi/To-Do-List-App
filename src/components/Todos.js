import React, { Component } from 'react'
import Todoitem from './Todoitem'
import PropTypes from 'prop-types'

export class Todos extends Component {
    markComplete = () => {

    }

    render() {
        return this.props.todos.map((todo) => (
            <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ))
    }
}

//PropTypes
Todos.propType = {
    todos: PropTypes.array.isRequired
}

export default Todos
