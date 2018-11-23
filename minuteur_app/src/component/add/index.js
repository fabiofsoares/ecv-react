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
    this.refs.min.value = 0;    
    this.refs.sec.value = 0;    
  }
  options(){
    let options = []
    for(let i = 0; i < 60; i ++){
      options.push(<option>{i}</option>)
    }
    return options;
  }
  render() {
   
      return (
      <div className={ styles.component }>
        <div className="add">
          <h2>-- NEW --</h2>
          <div className="input-container">
              <input type="text" ref="ing" placeholder="Ingredient" className="ing" required/>
          </div>
          <div className="input-container">
              <select ref="min" className="time min">{ this.options() }</select>
              <span>:</span> 
              <select ref="sec" className="time sec">{ this.options() }</select>
              {/* <input type="text" ref="min" placeholder="Min" className="time min"/>
              <input type="text" ref="sec" placeholder="Sec" className="time sec"/> */}
          </div>          
          <button onClick={ this.add.bind(this) }>+</button>
        </div>
      </div>
    );
  }
}

export default Add;