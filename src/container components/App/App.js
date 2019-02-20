import React, { Component } from 'react';
import './App.css';
import '../../presentational components/Editor/Editor'
import Editor from '../../presentational components/Editor/Editor'
import Preview from '../../presentational components/Preview/Preview';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Type something in the editor'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ 
      value: event.target.value 
    })
  }

  render() {
    return (
      <div className="App">
        <Editor type = {this.handleChange} />
        <Preview value = {this.state.value} />
      </div>
    )
  }
}

export default App;
