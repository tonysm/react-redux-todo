import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

class App extends Component {
  state = {
    items: [
      {id: 1, task: 'Get milk', done: false},
      {id: 2, task: 'Lorem ipsum', done: true}
    ],
    filters: [
      'all',
      'incomplete',
      'done'
    ],
    currentFilter: 'all'
  }

  toggleItem (item) {
    this.setState({
      items: this.state.items.map((i) => {
        if (i.task === item.task) {
          i.done = !i.done;
        }

        return i;
      })
    })
  }

  filteredTasks () {
    if (this.state.currentFilter === 'done') {
      return this.state.items.filter(i => i.done);
    }

    if (this.state.currentFilter === 'incomplete') {
      return this.state.items.filter(i => !i.done);
    }

    return this.state.items;
  }

  changeFilter (filter) {
    this.setState({
      currentFilter: filter,
    });
  }

  render() {
    const filteredItems = this.filteredTasks();

    return (
      <div className="App">
        <h1>TodoApp</h1>
        <TodoList items={filteredItems} onChecked={this.toggleItem.bind(this)} />
        <TodoFilter items={this.state.items} currentFilter={this.state.currentFilter} filters={this.state.filters} onFilterChange={this.changeFilter.bind(this)} />
      </div>
    );
  }
}

export default App;
