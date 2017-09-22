import React from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import { connect } from 'react-redux';
import {toggleTodo, changeFilter} from '../actions/TodoActions';

const App = ({items, onChecked, onFilterChange, currentFilter, filters}) => (
  <div className="App">
    <h1>TodoApp</h1>
    <TodoList items={items} onChecked={onChecked} />
    <TodoFilter currentFilter={currentFilter} filters={filters} onFilterChange={onFilterChange} />
  </div>
);

const filteredItems = (items, currentFilter) => {
  if (currentFilter === 'done') {
    return items.filter(i => i.done);
  }

  if (currentFilter === 'incomplete') {
    return items.filter(i => !i.done);
  }

  return items;
}

const mapStateToProps = (state) => {
  return {
    items: filteredItems(state.items, state.currentFilter),
    currentFilter: state.currentFilter,
    filters: state.filters
  };
}

const mapActionsToProps = {
  onChecked: toggleTodo,
  onFilterChange: changeFilter
};

export default connect(mapStateToProps, mapActionsToProps)(App);
