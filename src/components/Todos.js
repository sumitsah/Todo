import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

//    markComplete = () => {
//         console.log('Hello');
//    }

  render() {
    //console.log(this.props.todos);
    return this.props.todos.map((todo) => (
    // <h3>{  todo.title }</h3>
    <TodoItem key={ todo.id } todo={todo} markComplete={this.props.markComplete}
     delTodo={this.props.delTodo} />
    ));
  }
}

//PropTypes
Todos.prototypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
