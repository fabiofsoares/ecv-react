import React, { Component } from 'react';
import './style.css';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputs : this.props.inputs
        }
    }
    createInputs(data){
        
        let input = ''
        
        switch(data.type){
            case'radio':
                input = this.createRadio(data)
                break;
            case'select':
                input = this.creteSelect(data)
                break;                
            default:
                input =  <div className="form-group"><input type={data.type} placeholder={data.placeholder} id={data.id} onChange={this.onChangeInput.bind()}/></div>
                break;
        }

        return input;
    }   
    createRadio(data){

      return <div className="form-group radios"> { data.inputs.map((item) => (<label><input type={ data.type } name={ item.name }/>{ item.label }</label>))} </div>
       
    }

    creteSelect(data){

        return (
            <div className="form-group">
                <select>{ data.inputs.map((item) => (<option>{ item.label }</option>)) }</select>
            </div>
        )
    }
    onChangeInput(event){
        console.log('event ', event.target.value)
        //this.props.onSubmitStep(this)
    }

    render() {
        
        const inputs = this.props.data.map((item) => this.createInputs(item))
        
        return (
            <div className="form">
                <div className="form-containt">
                    { inputs }
                </div>
            </div>
        );
    }
}

export default Form;
