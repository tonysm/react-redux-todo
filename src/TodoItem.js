import React, { Component } from 'react';
import {PropTypes} from 'prop-types';

class TodoItem extends Component {
    render() {
        const item = this.props.item;
        const onChecked = () => this.props.onChecked(item);

        return (
            <li>
                <input type="checkbox" checked={item.done} onChange={onChecked} />
                {item.task}
            </li>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    onChecked: PropTypes.func.isRequired
}

export default TodoItem;
