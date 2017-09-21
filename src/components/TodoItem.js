import React from 'react';
import {PropTypes} from 'prop-types';

const TodoItem = ({item, onChecked}) => (
    <li>
        <input type="checkbox" checked={item.done} onChange={() => onChecked(item)} />
        {item.task}
    </li>
)


TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    onChecked: PropTypes.func.isRequired
}

export default TodoItem;
