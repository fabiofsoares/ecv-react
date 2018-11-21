import React, { Component } from 'react';
import styles from './style.css'

class Add extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: this.props.list
    }
  }
  add(){
    const newIng = {
      ing: this.refs.ing.value,
      min: parseInt(this.refs.min.value),
      sec: parseInt(this.refs.sec.value)
    }
    this.props.items(newIng)    
  }
  render() {
    return (
      <div className={ styles.component }>
        <div className="add">
          <input type="text" ref="ing" placeholder="ingredient"/>
          <input type="text" ref="min" placeholder="min"/>
          <input type="text" ref="sec" placeholder="sec"/>
          <button onClick={ this.add.bind(this) }>ADD</button>
        </div>
      </div>
    );
  }
}

export default Add;