import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        const items = this.props.items.map(i => <TodoItem key={i.id} item={i} onChecked={this.props.onChecked} />)

        return (
            <ul>
                {items}
            </ul>
        );
    }
}

TodoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    onChecked: PropTypes.func.isRequired
}

export default TodoList;
