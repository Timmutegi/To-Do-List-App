import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todoitem extends Component {

    getStyle = () => {
        return {
            width: '80%',
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            margin: '0 auto',
        }
    }

    render() {
        const { id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                {title}
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>Delete</button>
                </p>
            </div>
        )
    }
}

Todoitem.propType = {
    todos: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'black',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right'
}

export default Todoitem
