import React, { Component } from 'react';
import TaskList from '../components/TaskList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        {
          id: 1,
          task: "Wash dishes",
        },
        {
          id: 2,
          task: "Wash dog",
        },
        {
          id: 3,
          task: "Wash clothes",
        },
        {
          id: 4,
          task: "Take out trash",
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Moose List</h1>
        </header>
        <p className="App-intro">
          To get started, add a chore or a goal.
        </p>
        <div className="mainSection">
          <TaskList tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
