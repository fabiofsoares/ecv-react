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
    this.refs.ing.value = '';    
    this.refs.min.value = '';    
    this.refs.sec.value = '';    
  }
  render() {
      return (
      <div className={ styles.component }>
        <div className="add">
          <h2>-- NEW --</h2>
          <div className="input-container">
              <input type="text" ref="ing" placeholder="ingredient" className="ing"/>
          </div>
          <div className="input-container">
              <input type="text" ref="min" placeholder="min" className="time min"/>
              <input type="text" ref="sec" placeholder="sec" className="time sec"/>
          </div>          
          <button onClick={ this.add.bind(this) }>+</button>
        </div>
      </div>
    );
  }
}

export default Add;