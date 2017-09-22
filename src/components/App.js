import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import { connect } from 'react-redux';
import {toggleTodo, changeFilter} from '../actions/TodoActions';

class App extends Component {
  filteredTasks () {
    if (this.props.currentFilter === 'done') {
      return this.props.items.filter(i => i.done);
    }

    if (this.props.currentFilter === 'incomplete') {
      return this.props.items.filter(i => !i.done);
    }

    return this.props.items;
  }

  render() {
    const filteredItems = this.filteredTasks();

    return (
      <div className="App">
        <h1>TodoApp</h1>
        <TodoList items={filteredItems} onChecked={this.props.onChecked} />
        <TodoFilter items={this.props.items} currentFilter={this.props.currentFilter} filters={this.props.filters} onFilterChange={this.props.onFilterChange} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    currentFilter: state.currentFilter,
    filters: state.filters
  };
}

const mapActionsToProps = {
  onChecked: toggleTodo,
  onFilterChange: changeFilter
};

export default connect(mapStateToProps, mapActionsToProps)(App);
