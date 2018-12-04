import React, { Component } from 'react';
import './style.css';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputs : this.props.inputs
        }
        this.dataForm = [
            {
                id:'civilite',
                type:'select',
                placeholder:'civilite',
                inputs : [
                    {
                        label : 'celibataire',
                        name: 'celibataire'
                    },
                    {
                        label : 'marrie',
                        name: 'marrie'
                    },
                    {
                        label : 'veuf(ve)',
                        name: 'veuf'
                    }
                ]
            },
            {
                id:'nom',
                type:'text',
                placeholder:'Nom'                
            },
            {
                id:'prenom',
                type:'text',
                placeholder:'Prenom'                
            },
            {
                id:'email',
                type:'email',
                placeholder:'Email'                
            },
            {
                id:'tel',
                type:'text',
                placeholder:'Tel'                
            }
        ]
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
                input =  <div className="form-group"><input type={data.type} placeholder={data.placeholder} id={data.id} /></div>
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
