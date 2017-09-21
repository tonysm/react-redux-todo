import React from 'react';
import {PropTypes} from 'prop-types';

const TodoFilter = ({filters, currentFilter, onFilterChange}) => (
    <div>
        {filters.map(filter => <button key={filter} disabled={filter === currentFilter} onClick={() => onFilterChange(filter)} >{filter.toUpperCase()}</button>)}
    </div>
)

TodoFilter.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentFilter: PropTypes.string.isRequired,
    filters: PropTypes.arrayOf(PropTypes.string),
    onFilterChange: PropTypes.func.isRequired
};

export default TodoFilter;