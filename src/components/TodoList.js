import React from 'react';
import {PropTypes} from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({items, onChecked}) => (
    <ul>
        {items.map(i => <TodoItem key={i.id} item={i} onChecked={onChecked} />)}
    </ul>
)

TodoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    onChecked: PropTypes.func.isRequired
}

export default TodoList;
