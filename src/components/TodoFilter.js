import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class TodoFilter extends Component {
    render () {
        const buttons = this.props.filters.map(filter => (
            <button disabled={this.props.currentFilter === filter} onClick={() => this.props.onFilterChange(filter)}>
                {filter.toUpperCase()}
            </button>
        ));
        return (
            <div>
                {buttons}
            </div>
        );
    }
}

TodoFilter.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentFilter: PropTypes.string.isRequired,
    filters: PropTypes.arrayOf(PropTypes.string),
    onFilterChange: PropTypes.func.isRequired
};

export default TodoFilter;