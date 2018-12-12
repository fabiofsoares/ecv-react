import React, { Component } from 'react';
import './style.css';

class Steps extends Component {
    constructor(props){
        super(props)
        this.state = {
            courant_page: this.props.courant,
            page: this.props.page,
            list: this.props.list
        }
        
    }
    submitData = (data) => {
        console.log(data)         
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
                input =  <div className="form-group"><input type={data.type} placeholder={data.placeholder} ref={data.id} /></div>
                break;
        }

        return input;
    }   
    createRadio(data){

      return <div className="form-group radios" ref={ data.id }> { data.inputs.map((item) => (<label><input type={ data.type } name={ item.name } value={ item.value }/>{ item.label }</label>))} </div>
       
    }

    creteSelect(data){

        return (
            <div className="form-group">
                <select ref={ data.id }>{ data.inputs.map((item) => (<option>{ item.label }</option>)) }</select>
            </div>
        )
    }
       
    createInput(data){
        return (
            <div className="form">
                <div className="form-containt">
                    { data.map((item) => this.createInputs(item)) }
                </div>
            </div>
        )
    }

    render() {       
        
        return (
            <div className={ this.props.courant === this.props.page ? 'active steps' :'steps'}>
                
                <h1>PAGE { this.props.page }</h1>
                
                <h2>{ this.props.data.title }</h2>

                <div className="form">
                    <div className="form-containt">
                        { this.props.data.form && this.props.data.form.map((item) => this.createInputs(item)) }
                    </div>
                </div>
                
                <div className={ this.props.courant === 3 ? 'active rec' :'rec'}>
                    <p>Nom : { this.props.rec.nom }</p>
                    <p>Prenom : { this.props.rec.prenom }</p>
                    <p>Tel : { this.props.rec.tel }</p>
                    <p>Email : { this.props.rec.email }</p>
                    <p>Framework : { this.props.rec.framework }</p>
                </div>
            </div>
        );
    }
}

export default Steps;
