import React, { Component } from 'react';
import './style.css';

class Minuteur extends Component {
    
    constructor(props){
        super(props)
      this.state = {
        sec : this.props.sec,
        min : this.props.min,
        ready: false
      }
    }
    
    timing(){
        if(this.state.min !== 0 || this.state.sec !== 0){
          if(this.state.sec === 0){
            this.setState({
              sec : 59,
            min : this.state.min -1
          })
        } else {
            this.setState({
              sec : this.state.sec - 1          
          })
        }
      }  else {
        clearInterval(this.time)
        this.setState({
          ready : true          
        })
      
      }
    }
   
    componentDidMount(){
        this.time = setInterval( () => this.timing(), 1000)
    }
    render(){
        let minute = this.state.min < 10 ? '0' + this.state.min : this.state.min,
              seconde = this.state.sec < 10 ? '0' + this.state.sec : this.state.sec
        
      return (
          <div className={this.state.ready ? 'cook ready' :  'cook'}>
          <h2>{ this.props.ing }</h2>
            <div className="total">Temps de Cuisson <br></br> <b>{(this.props.min < 10 ? '0' + this.props.min : this.props.min) + ':' + (this.props.sec < 10 ? '0' + this.props.sec : this.props.sec)}</b></div>
          <div className="timing">
          { this.state.ready ? 'PRÊT' : (minute + ':' + seconde)}
          </div>
          </div>
      )
    }
}

export default Minuteur;
