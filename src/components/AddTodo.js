import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''

    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p>
                    <input
                        type="text"
                        name="title"
                        placeholder="Add Todo..."
                        style={inputStyle}
                        value={this.state.title}
                        onChange={this.onChange}
                    /><br/><br/>
                    <input
                        type="submit"
                        value="submit"
                        className="btn"
                    />
                </p>
              
              
            </form>
        )
    }
}

const inputStyle = {
    width: '20rem',
    height: '30px',
    border: '2px solid black',
}

export default AddTodo
