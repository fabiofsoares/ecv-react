import React, { Component } from 'react';
import styles from './style.css'
import icon_play from '../../assets/img/icons/play.png';
import icon_pause from '../../assets/img/icons/pause.png';
import icon_stop from '../../assets/img/icons/stop.png';
import icon_replay from '../../assets/img/icons/replay.png';

class Minuteur extends Component {
    constructor(props){
        super(props)
        this.state = {
            sec : this.props.sec,
            min : this.props.min,
            ready: false,
            status: ''
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
        } else {
            clearInterval(this.time)
            this.setState({
                ready : true          
            })
        }
    }
    
    start(){
        this.setState({
            status: 'play'
        })
        this.time = setInterval( () => this.timing(), 1000)
    }

    restart(){
        clearInterval(this.time)
        this.setState({
            sec : this.props.sec,
            min : this.props.min,
            status: 'play'
        })
        this.time = setInterval( () => this.timing(), 1000)
    }

    pause(){
        clearInterval(this.time)
        this.setState({
            status: 'pause'
        })
    }

    stop(){
        clearInterval(this.time)
        this.setState({
            ready : true,
            status: 'stop'          
        })
    }

    render(){
        let minute = this.state.min < 10 ? '0' + this.state.min : this.state.min,
              seconde = this.state.sec < 10 ? '0' + this.state.sec : this.state.sec
        
      return (
        <div className={ styles.component } >  
            <div className={'cook ' + this.state.status }>
                <h2>{ this.props.ing }</h2>
                <div className="total">Temps de Cuisson <br></br> <b>{(this.props.min < 10 ? '0' + this.props.min : this.props.min) + ':' + (this.props.sec < 10 ? '0' + this.props.sec : this.props.sec)}</b></div>
                <div className="players">
                    <button onClick={this.start.bind(this)}><img src={ icon_play  } /></button>
                    <button onClick={this.restart.bind(this)}><img src={ icon_replay  }/></button>
                    <button onClick={this.pause.bind(this)}><img src={ icon_pause  }/></button>
                    <button onClick={this.stop.bind(this)}><img src={ icon_stop  }/></button>
                </div>
                <div className="timing">
                    { this.state.ready ? 'PRÊT' : (minute + ':' + seconde)}
                </div>
            </div>
        </div>          
      )
    }
}

export default Minuteur;