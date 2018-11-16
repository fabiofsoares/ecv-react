import React, { Component } from 'react';
import Minuteur from './components/minuteur/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Minuteur ing={'Lait'} min={10} sec={30} />
      </div>
    );
  }
}

export default App;
