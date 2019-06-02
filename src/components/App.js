import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StackList from './StackList';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Flashcard Pro</h2>
        <hr />
        <StackList />
        <hr />
        <Link to="/stack_form">Create a New Stack</Link>
      </div>
    )
  }
}

export default App;