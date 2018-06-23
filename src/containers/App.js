import React, { Component } from 'react';
import TaskList from '../components/TaskList';
import NewTask from '../components/NewTask';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
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

  addTask = () => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {id: this.state.tasks.length + 1, task: this.state.inputValue}
      ],
      inputValue: ''
    });
  }

  inputChange = (text) => {
    this.setState({ inputValue: text });
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
          <NewTask 
            handleInputChange={(text) => {this.inputChange(text)}}
            handleAddTask={() => {this.addTask()}}
            inputValue={this.state.inputValue}
          />
          <TaskList tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
