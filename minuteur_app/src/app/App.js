import React, { Component } from 'react';
import './App.css';
import Header from '../component/header/index'
import Minuteur from '../component/minuteur/index'
import Add from '../component/add/index'

/* const list = [
 {
   ing : 'oeuf',
   min : 2,
   sec: 15
 }
] */
class App extends Component {
   
  state = {
    items : []
  }

  add(data){    
    this.setState({
      items: [...this.state.items, data]     
    })    
  }
  render() {       
    
    const minuteur =this.state.items.map((item, index) => 
      <Minuteur key={index} ing={item.ing} min={item.min} sec={item.sec} /> 
    )

    return (
      <div className="App">
        <Header />        
        { minuteur }        
        <Add items={ this.add.bind(this) } />
      </div>
    );
  }
}

export default App;
