import React, { Component } from 'react';
import './style.css';
import Form from '../form';

class Steps extends Component {
    constructor(props){
        super(props)
        this.state = {
            courant_page: this.props.courant,
            page: this.props.page
        }
        
    }
    submitData = (data) => {
        console.log(data)         
    }

    render() {
        console.log(this.refs.step_2)        
        let form = ''
        if(this.props.data.form){
            form = <Form data={this.props.data.form} ref={ 'step_' + this.state.page } onSubmitStep={ this.submitData }/>
        } 
        return (
            <div className={ this.props.courant === this.props.page ? 'active steps' :'steps'}>
                <h1>PAGE { this.props.page }</h1>
                <h2>{ this.props.data.title }</h2>
                { form }
            </div>
        );
    }
}

export default Steps;
